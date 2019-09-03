<template>
  <div class="home">
    <Page
      v-if="loading"
      class="page--outer">
      <div class="container">
        <Loading />
      </div>
    </Page>
    <div v-if="isAuthenticated">
      <Account />
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <Entry />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import Page from '@/components/Views/Page.vue';
import Loading from '@/components/Utils/Loading.vue';
import Entry from '@/components/Entry/Entry.vue';
import Account from '@/components/Account/Account.vue';

const { mapGetters } = createNamespacedHelpers('auth');

export default {
  name: 'Home',

  components: {
    Page,
    Loading,
    Entry,
    Account,
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      authStatus: 'authStatus',
    }),

    loading() {
      return this.authStatus === 'loading' && !this.isAuthenticated;
    },
  },
};
</script>

<style scoped>
  .home,
  .home > div {
    min-height: 100vh;
  }
</style>
