<template>
  <div class="remind">
    <form
      class="form form--vertical">
      <fieldset class="form__group">
        <input
          v-model="usermail"
          :aria-label="$t('remind.email.aria')"
          :placeholder="$t('remind.email.placeholder')"
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
          :aria-label="$t('remind.button.aria')"
          @click.prevent="submit"
        >{{ $t('remind.button.text') }}</button>
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

/* eslint-disable no-unused-vars */
import { REMIND_PASSWORD } from '../../store/actions/pass';
/* eslint-enable no-unused-vars */

import {
  validateEmail,
  setEmailError,
} from '@/utils/validate';

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
    submit() {
      const usermail = this.$refs.usermailref.value;
      this.mailErs = setEmailError(usermail);
      if (validateEmail(usermail)) this.$store.dispatch('pass/REMIND_PASSWORD', usermail);
    },
  },
};
</script>
