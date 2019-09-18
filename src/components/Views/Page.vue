<template>
  <div class="page">
    <slot></slot>
    <Footer class="page__footer"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Views/Footer.vue';

export default {
  name: 'Page',

  components: {
    Footer,
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

    &--outer {
      background: $color_background;
    }

    &__footer {
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
