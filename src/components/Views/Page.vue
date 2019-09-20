<template>
  <div class="page">
    <slot></slot>
    <Footer class="page__footer">
      <LangSwitch /><ThemeSwitch />
    </Footer>
  </div>
</template>

<script>
import Footer from '@/components/Views/Footer.vue';
import LangSwitch from '@/components/Utils/LangSwitch.vue';
import ThemeSwitch from '@/components/Utils/ThemeSwitch.vue';

export default {
  name: 'Page',

  components: {
    Footer,
    LangSwitch,
    ThemeSwitch,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: $footer_height;

    &__footer {
      height: $footer_height;
      text-align: center;
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: $gutter / 2;
      padding-bottom: $gutter / 2;
    }

    .container {
      max-width: 300px;
      margin-bottom: 12vh;
      text-align: center;

      @include xs {
        padding-top: $gutter;
        padding-bottom: $gutter;
        margin-bottom: 0;
      }
    }
  }
</style>
