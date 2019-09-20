<template>
  <div class="login">
    <form
      class="form form--vertical">
      <fieldset class="form__group">
        <input
          v-model="usermail"
          type="email"
          :arial-label="$t('login.email.aria')"
          :placeholder="$t('login.email.placeholder')"
          required
          ref="usermailref"
        />
        <div
          class="form__message form__message--error"
        >{{ mailErs }}</div>
      </fieldset>
      <fieldset class="form__group">
        <input
          v-model="password"
          type="password"
          :arial-label="$t('login.password.aria')"
          :placeholder="$t('login.password.placeholder')"
          required
          ref="passwordref"
        />
        <div
          class="form__message form__message--error"
        >{{ passErs }}</div>
      </fieldset>
      <fieldset class="form__group form__group--social">
        <button
          type="button"
          class="btn--fb"
          :aria-label="$t('login.fb_button.aria')"
          @click.prevent="loginFB"
        >{{ $t('login.fb_button.text') }}</button>
        <button
          type="button"
          class="btn--vk"
          :aria-label="$t('login.vk_button.aria')"
          @click.prevent="loginVK"
        >{{ $t('login.vk_button.text') }}</button>
      </fieldset>
      <fieldset class="form__group">
        <button
          type="submit"
          :aria-label="$t('login.submit_button.aria')"
          @click.prevent="submit"
        >{{ $t('login.submit_button.text') }}</button>
        <div
          v-if="error"
          class="form__message form__message--error"
        >{{ error }}</div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

/* eslint-disable no-unused-vars */
import {
  AUTH_REQUEST,
  AUTH_FACEBOOK_REQUEST,
  AUTH_VKONTAKTE_REQUEST,
} from '@/store/actions/auth';
/* eslint-enable no-unused-vars */

import {
  validateEmail,
  validatePassword,
  setEmailError,
  setPasswordError,
} from '@/utils/validate';

const { mapGetters } = createNamespacedHelpers('auth');

export default {
  name: 'Login',

  props: {
    email: String,
  },

  data: () => ({
    password: '',
    mailErs: '',
    passErs: '',
  }),

  computed: {
    ...mapGetters({
      error: 'error',
    }),

    usermail: {
      get() {
        return this.email;
      },
      set(value) {
        this.$emit('update:email', value);
      },
    },
  },

  methods: {
    submit() {
      const usermail = this.$refs.usermailref.value;
      const password = this.$refs.passwordref.value;
      this.mailErs = setEmailError(usermail);
      this.passErs = setPasswordError(password);
      // eslint-disable-next-line
      if (validateEmail(usermail) && validatePassword(password)) {
        this.$store.dispatch('auth/AUTH_REQUEST', { usermail, password });
      }
    },

    loginFB() {
      this.$store.dispatch('auth/AUTH_FACEBOOK_REQUEST');
    },

    loginVK() {
      this.$store.dispatch('auth/AUTH_VKONTAKTE_REQUEST');
    },
  },
};
</script>
