<template>
  <Page class="account">
    <div class="container">
      <h1>Account</h1>
      <h3>Email: <strong>{{ profile.usermail }}</strong></h3>
      <h3>isVerify: <strong>{{ profile.isVerify }}</strong></h3>
      <form
        class="form form--vertical">
        <fieldset class="form__group">
          <button
            type="submit"
            role="button"
            aria-label="Submit button"
            @click.prevent="logout"
          >Sign Out</button>
        </fieldset>
        <fieldset
          v-if="!profile.isVerify"
          class="form__group">
          <button
            type="submit"
            role="button"
            aria-label="Send Verify Email"
            @click.prevent="send"
          >Send Verify Email</button>
          <div
            class="form__message form__message--error"
          ></div>
        </fieldset>
      </form>
    </div>
  </Page>
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
import Page from '../Views/Page.vue';

const { mapGetters } = createNamespacedHelpers('user');

export default {
  name: 'Account',

  components: {
    Page,
    Loading,
  },

  props: {
    source: String,
  },

  data: () => ({
    message: '',
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
  },

  methods: {
    emailMessage() {
      if (this.email !== '') return MESSAGES.resend_verify_email;
      if (!this.profile.isVerify) return MESSAGES.verify_account;
    },

    logout() {
      this.$store.dispatch('auth/AUTH_LOGOUT');
    },

    send() {
      this.message = this.emailMessage();
      this.$store.dispatch('user/SEND_VERIFY_EMAIL');
    },
  },
};
</script>

<style scoped>
</style>
