<template>
  <Page class="password page--outer">
    <div class="container">
      {{ result }}
      <Loading />
    </div>
  </Page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// eslint-disable-next-line no-unused-vars
import { SET_VERIFY } from '@/store/actions/verify';

import Page from '@/components/Views/Page.vue';
import Loading from '@/components/Utils/Loading.vue';

const { mapGetters } = createNamespacedHelpers('verify');

export default {
  name: 'Verify',

  components: {
    Page,
    Loading,
  },

  mounted() {
    const { id } = this.$route.query;
    this.$store.dispatch('verify/SET_VERIFY', id);
  },

  computed: {
    ...mapGetters({
      result: 'result',
    }),

    loading() {
      return this.result;
    },
  },

  watch: {
    loading() {
      if (this.result !== '') this.$router.push({ path: '/' });
    },
  },
};
</script>
