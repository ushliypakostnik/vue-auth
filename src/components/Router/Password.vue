<template>
  <Page class="password page--outer">
    <div class="container">
      <Logo />
      <form
        class="form form--vertical">
        <fieldset class="form__group">
          <input
            v-model="password1"
            type="password"
            arial-label="Password"
            placeholder="Password"
            required
            ref="p1"
          />
          <div
            class="form__message form__message--error"
          >{{ pass1Ers }}</div>
        </fieldset>
        <fieldset class="form__group">
          <input
            v-model="password2"
            type="password"
            arial-label="Password again"
            placeholder="Password again"
            required
            ref="p2"
          />
          <div
            class="form__message form__message--error"
          >{{ pass2Ers }}</div>
        </fieldset>
        <fieldset class="form__group">
          <button
            type="submit"
            role="button"
            aria-label="Submit button"
            @click.prevent="submit"
          >Set password</button>
          <div
            class="form__message form__message--error"
          >{{ match }}</div>
        </fieldset>
      </form>
    </div>
  </Page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// eslint-disable-next-line no-unused-vars
import { SET_PASSWORD } from '@/store/actions/pass';

import { MESSAGES } from '@/utils/constants';
import {
  validatePassword,
  setPasswordError,
} from '@/utils/validate';

import Page from '@/components/Views/Page.vue';
import Logo from '@/components/Views/Logo.vue';

const { mapGetters } = createNamespacedHelpers('pass');

export default {
  name: 'Password',

  components: {
    Page,
    Logo,
  },

  data: () => ({
    password1: '',
    password2: '',
    pass1Ers: '',
    pass2Ers: '',
    match: '',
  }),

  computed: {
    ...mapGetters({
      error: 'error2',
    }),
  },

  methods: {
    submit() {
      const password = this.$refs.p1.value;
      const password2 = this.$refs.p2.value;
      this.pass1Ers = setPasswordError(password);
      this.pass2Ers = setPasswordError(password2);
      // eslint-disable-next-line
      if (validatePassword(password) && validatePassword(password2)) {
        if (password !== password2) {
          this.match = MESSAGES.passwords_do_not_match;
        } else {
          const query = this.$route.hash;
          const id = query.split('&')[0].slice(4);
          const token = query.split('&')[1].slice(6);
          this.$store.dispatch('pass/SET_PASSWORD', { id, password, token });
        }
      }
    },
  },
};
</script>
