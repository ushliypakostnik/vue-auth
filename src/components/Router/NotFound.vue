<template>
  <Page class="page404 page--outer">
    <div class="container">
      <Logo />
      <h1>404</h1>
      <h3>Page Not Found!</h3>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Views/Page.vue';
import Logo from '@/components/Views/Logo.vue';

export default {
  name: 'NotFound',

  components: {
    Page,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page404 {
    h1 {
      color: $color_primary;
      margin: 0;
      @include text($font-family_sans, round($font-size_large * 4), $font-weight_sans_bold);
      line-height: 100px;
    }

    h3 {
      margin: 0;
      @include text($font-family_sans, $font-size_large, $font-weight_sans_bold);
    }
  }
</style>
