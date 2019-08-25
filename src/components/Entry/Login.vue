<template>
  <div class="login">
    <form
      class="form form--vertical">
      <fieldset class="form__group">
        <input
          v-model="usermail"
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
          role="button"
          aria-label="Submit button"
          @click.prevent="submit"
        >Login / Registration</button>
        <div
          v-if="error"
          class="form__message form__message--error"
        ></div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// eslint-disable-next-line no-unused-vars
import { AUTH_REQUEST } from '../../store/actions/auth';

import { UTILS, MESSAGES } from '../../utils/constants';

const { mapGetters } = createNamespacedHelpers('auth');

export default {
  name: 'Login',

  components: {
  },

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
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validate = regExp.test(email);
      return validate;
    },

    validatePassword(password) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;
      const validate = regExp.test(password);
      return validate;
    },

    mailError(email) {
      if (email.length === 0) {
        return MESSAGES.email_required;
      } else if (this.validateEmail(email)) {
        return '';
      }
      return MESSAGES.email_must_be_valid;
    },

    passError(password) {
      const minLenght = UTILS.min_password_lenght;
      if (password.length === 0) {
        return MESSAGES.password_required;
      } else if (password.length < minLenght) {
        return MESSAGES.password_min_lenght;
      } else if (!this.validatePassword(password)) {
        return MESSAGES.password_contain_digit;
      }
      return '';
    },

    submit() {
      const usermail = this.$refs.usermailref.value;
      const password = this.$refs.passwordref.value;
      this.mailErs = this.mailError(usermail);
      this.passErs = this.passError(password);
      // eslint-disable-next-line
      if (this.validateEmail(usermail) && this.validatePassword(password))
        this.$store.dispatch('auth/AUTH_REQUEST', { usermail, password });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
