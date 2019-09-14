<template>
  <Page class="password page--outer">
    <div class="container">
      <Loading />
    </div>
  </Page>
</template>

<script>
import { mapMutations } from 'vuex';

import storage from '@/utils/storage';

import Page from '@/components/Views/Page.vue';
import Loading from '@/components/Utils/Loading.vue';

export default {
  name: 'Social',

  components: {
    Page,
    Loading,
  },

  mounted() {
    const { token } = this.$route.query;
    storage.setAuth(token);
    this.AUTH_SUCCESS(token);
    this.$router.push({ path: '/' });
  },

  methods: {
    ...mapMutations('auth', [
      'AUTH_SUCCESS',
    ]),
  },
};
</script>
