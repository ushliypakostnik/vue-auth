<template>
  <Page class="account">
    <div
      v-if="isProfileLoaded"
      class="container">
      <h1>{{ $t('account.header') }}</h1>
      <h3>{{ $t('account.label_email') }}: <strong>{{ profile.usermail }}</strong></h3>
      <h3>{{ $t('account.label_verify') }}: <strong>{{ profile.isVerify }}</strong></h3>
      <form
        class="form form--vertical">
        <fieldset class="form__group">
          <button
            type="button"
            :aria-label="$t('account.logout_button.aria')"
            @click.prevent="logout"
          >{{ $t('account.logout_button.text') }}</button>
        </fieldset>
        <fieldset
          v-if="!profile.isVerify"
          class="form__group">
          <button
            type="button"
            :aria-label="$t('account.verify_button.aria')"
            @click.prevent="send"
          >{{ $t('account.verify_button.text') }}</button>
          <div
            class="form__message form__message--success"
          >{{ message }}</div>
        </fieldset>
      </form>
    </div>
    <Loading v-else />
  </Page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

/* eslint-disable no-unused-vars */
import { AUTH_LOGOUT } from '@/store/actions/auth';
import {
  USER_REQUEST,
  SEND_VERIFY_EMAIL,
} from '@/store/actions/user';
/* eslint-enable no-unused-vars */

import i18n from '@/utils/i18n';

import Loading from '@/components/Utils/Loading.vue';
import Page from '@/components/Views/Page.vue';

const { mapGetters } = createNamespacedHelpers('user');

export default {
  name: 'Account',

  components: {
    Page,
    Loading,
  },

  data: () => ({
    message: '',
  }),

  beforeCreate() {
    this.$store.dispatch('user/USER_REQUEST');
  },

  mounted() {
    if (!this.profile.isVerify) this.message = i18n.t('verifcation.verify_account');
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
    logout() {
      this.$store.dispatch('auth/AUTH_LOGOUT');
    },

    send() {
      this.message = i18n.t('verifcation.resend_verify_email');
      this.$store.dispatch('user/SEND_VERIFY_EMAIL');
    },
  },
};
</script>
