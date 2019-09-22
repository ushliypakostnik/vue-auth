<template>
  <Page class="password">
    <div class="container">
      <Logo />
      <form
        class="form form--vertical">
        <fieldset class="form__group">
          <input
            v-model="password1"
            type="password"
            :arial-label="$t('password.password1.aria')"
            :placeholder="$t('password.password1.placeholder')"
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
            :arial-label="$t('password.password2.aria')"
            :placeholder="$t('password.password2.placeholder')"
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
            :aria-label="$t('password.button.aria')"
            @click.prevent="submit"
          >{{ $t('password.button.text') }}</button>
          <div
            class="form__message form__message--error"
          >{{ match }}</div>
        </fieldset>
      </form>
    </div>
  </Page>
</template>

<script>
import { mapMutations } from 'vuex';

import storage from '@/utils/storage';

/* eslint-disable no-unused-vars */
import { SET_PASSWORD } from '@/store/actions/pass';
/* eslint-enable no-unused-vars */

import i18n from '@/utils/i18n';
import {
  validatePassword,
  setPasswordError,
} from '@/utils/validate';

import Page from '@/components/Views/Page.vue';
import Logo from '@/components/Views/Logo.vue';

export default {
  name: 'Password',

  components: {
    Page,
    Logo,
  },

  data: () => ({
    id: '',
    password1: '',
    password2: '',
    pass1Ers: '',
    pass2Ers: '',
    match: '',
  }),

  mounted() {
    const query = this.$route.hash;
    this.id = query.split('&')[0].slice(4);
    const token = query.split('&')[1].slice(6);
    storage.setAuth(token);
    this.AUTH_SUCCESS(token);
  },

  methods: {
    ...mapMutations('auth', [
      'AUTH_SUCCESS',
    ]),

    submit() {
      const password = this.$refs.p1.value;
      const password2 = this.$refs.p2.value;
      this.pass1Ers = setPasswordError(password);
      this.pass2Ers = setPasswordError(password2);
      if (validatePassword(password) && validatePassword(password2)) {
        if (password !== password2) {
          this.match = i18n.t('verifcation.passwords_do_not_match');
        } else {
          this.$store.dispatch('pass/SET_PASSWORD', { id: this.id, password });
        }
      }
    },
  },
};
</script>
