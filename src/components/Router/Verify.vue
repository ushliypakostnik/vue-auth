<template>
  <Page class="password">
    <div class="container">
      <Loading />
    </div>
  </Page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

/* eslint-disable no-unused-vars */
import { SET_VERIFY } from '@/store/actions/verify';
/* eslint-enable no-unused-vars */

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
