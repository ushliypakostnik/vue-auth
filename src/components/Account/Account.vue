<template>
  <div class="account">
    <h1>Account</h1>
    <h3>Email: <strong>{{ profile.usermail }}</strong></h3>
    <h3>isVerify: <strong>{{ profile.isVerify }}</strong></h3>
    <button
      type="submit"
      role="button"
      aria-label="Submit button"
      @click.prevent="logout"
    >Sign Out</button>
    <div
      v-if="!profile.isVerify"
      class="button-wrapper"
    >
      <button
        type="submit"
        role="button"
        aria-label="Send Verify Email"
        @click.prevent="send"
      >Send Verify Email</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { AUTH_LOGOUT } from '../../store/actions/auth'; // eslint-disable-line no-unused-vars
import {
  USER_REQUEST, // eslint-disable-line no-unused-vars
  SEND_VERIFY_EMAIL, // eslint-disable-line no-unused-vars
} from '../../store/actions/user';

import ScreenHelper from '../../utils/screen-helper';

import { MESSAGES } from '../../utils/constants';

import Loading from '../Utils/Loading.vue';

const { mapGetters } = createNamespacedHelpers('user');

export default {
  name: 'Account',

  components: {
    Loading,
  },

  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    drawerMobile: false,
    mini: true,
    breackpointSM: ScreenHelper.SM,
  }),

  beforeCreate() {
    this.$store.dispatch('user/USER_REQUEST');
  },

  computed: {
    ...mapGetters({
      isProfileLoaded: 'isProfileLoaded',
      profile: 'getProfile',
      email: 'email',
    }),

    ifEmailMessage() {
      if (this.email !== '' || !this.profile.isVerify) return true;
      return false;
    },

    emailMessage() {
      if (this.email !== '') return MESSAGES.resend_verify_email;
      if (!this.profile.isVerify) return MESSAGES.verify_account;
      return '';
    },
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/AUTH_LOGOUT');
    },
    send() {
      this.$store.dispatch('user/SEND_VERIFY_EMAIL');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_stylebase.scss';

</style>
