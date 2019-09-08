<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
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
