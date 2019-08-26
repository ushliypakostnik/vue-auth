<template>
  <div class="home">
    <Loading v-if="loading"/>
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

import Loading from '../Utils/Loading.vue';
import Entry from '../Entry/Entry.vue';
import Account from '../Account/Account.vue';

const { mapGetters } = createNamespacedHelpers('auth');

export default {
  name: 'Home',

  components: {
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
