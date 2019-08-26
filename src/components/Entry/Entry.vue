<template>
  <Page class="entry page--outer">
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
        rel="noopener noreferrer"
        @click.prevent="usercase"
      >{{ login ? "Remind Рassword ?" : "Login / Registration" }}</a>
    </div>
  </Page>
</template>

<script>
import Login from './Login.vue';
import Remind from './Remind.vue';
import Page from '../Views/Page.vue';
import Logo from '../Views/Logo.vue';

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

<style scoped>
</style>
