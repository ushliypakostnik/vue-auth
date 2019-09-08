<template>
  <div class="login">
    <form
      class="form form--vertical">
      <fieldset class="form__group">
        <input
          v-model="usermail"
          type="email"
          arial-label="Email"
          placeholder="Email"
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
          arial-label="Password"
          placeholder="Password"
          required
          ref="passwordref"
        />
        <div
          class="form__message form__message--error"
        >{{ passErs }}</div>
      </fieldset>
      <fieldset class="form__group">
        <button
          type="submit"
          aria-label="Submit button"
          @click.prevent="submit"
        >Login / Registration</button>
        <div
          v-if="error"
          class="form__message form__message--error"
        >{{ error }}</div>
        <button
          type="button"
          class="btn--fb"
          aria-label="Facebook button"
          @click.prevent="loginFB"
        >Via Facebook</button>
        <div
          v-if="errorFB"
          class="form__message form__message--error"
        >{{ errorFB }}</div>
        <button
          type="button"
          class="btn--vk"
          aria-label="Vkontakte button"
          @click.prevent="loginVK"
        >Via Vkontakte</button>
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

// eslint-disable-next-line no-unused-vars
import {
  AUTH_REQUEST,
  AUTH_FACEBOOK_REQUEST,
  AUTH_VKONTAKTE_REQUEST
} from '@/store/actions/auth';

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
    }
  },
};
</script>
