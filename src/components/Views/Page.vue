<template>
  <div class="page">
    <slot></slot>
    <Footer class="page__footer">
      <LangSwitch />
    </Footer>
  </div>
</template>

<script>
import Footer from '@/components/Views/Footer.vue';
import LangSwitch from '@/components/Utils/LangSwitch.vue';

export default {
  name: 'Page',

  components: {
    Footer,
    LangSwitch,
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

    &--outer {
      background: $color_background;
    }

    &__footer {
      height: $footer_height;
      text-align: center;
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: $color_background;
      padding-top: $gutter / 2;
      padding-bottom: $gutter / 2;
      border: 1px solid $color_border;
    }

    .container {
      max-width: 300px;
      margin-bottom: 13vh;
      text-align: center;

      @include xs {
        padding-top: $gutter;
        padding-bottom: $gutter;
        margin-bottom: 0;
      }
    }
  }
</style>
