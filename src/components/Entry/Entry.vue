<template>
  <Page class="entry page--outer">
    {{ $t('verifcation.verify_account') }}
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
