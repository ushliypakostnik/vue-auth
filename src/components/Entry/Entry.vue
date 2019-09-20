<template>
  <Page class="entry">
    <div class="container">
      <Logo />
      <Login
        v-if="login"
        :email.sync="email"
      />
      <Remind
        v-else
        :email.sync="email"
      />
      <a
        href="#"
        @click.prevent="usercase"
      >{{ login ? $t('entry.usercase.remind') : $t('entry.usercase.login') }}</a>
    </div>
  </Page>
</template>

<script>
import Login from '@/components/Entry/Login.vue';
import Remind from '@/components/Entry/Remind.vue';
import Page from '@/components/Views/Page.vue';
import Logo from '@/components/Views/Logo.vue';

export default {
  name: 'Entry',

  components: {
    Page,
    Logo,
    Login,
    Remind,
  },

  data: () => ({
    login: true,
    email: '',
  }),

  methods: {
    usercase() {
      this.login = !this.login;
    },
  },
};
</script>
