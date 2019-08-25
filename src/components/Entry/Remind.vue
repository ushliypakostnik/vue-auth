<template>
  <div class="remind">
    <form
      class="form form--vertical">
      <fieldset class="form__group">
        <input
          v-model="usermail"
          aria-label="Email"
          label="E-mail"
          required
          ref="usermailref"
        />
        <div
          class="form__message form__message--error"
        >{{ mailErs }}</div>
      </fieldset>
      <fieldset class="form__group">
        <button
          type="submit"
          role="button"
          aria-label="Submit button"
          @click.prevent="submit"
        >Remind Рassword</button>
        <div
          v-if="error"
          class="form__message form__message--error"
        >{{ error }}</div>
        <div
          v-if="success"
          class="form__message form__message--success"
        >{{ success }}</div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// eslint-disable-next-line no-unused-vars
import { REMIND_PASSWORD } from '../../store/actions/pass';

import { UTILS, MESSAGES } from '../../utils/constants';

const { mapGetters } = createNamespacedHelpers('pass');

export default {
  name: 'Remind',

  props: {
    email: String,
  },

  data: () => ({
    mailErs: '',
  }),

  computed: {
    ...mapGetters({
      error: 'error',
      success: 'success',
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

    mailError(email) {
      if (email.length === 0) {
        return MESSAGES.email_required;
      } else if (this.validateEmail(email)) {
        return '';
      }
      return MESSAGES.email_must_be_valid;
    },

    submit() {
      const usermail = this.$refs.usermailref.value;
      this.mailErs = this.mailError(usermail);
      if (this.validateEmail(usermail)) this.$store.dispatch('pass/REMIND_PASSWORD', usermail);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
