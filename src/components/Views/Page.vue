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
@import '../../styles/_stylebase.scss';

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &--outer {
    background: $color_background;

    .container {
      max-width: 300px;
      margin-top: -15%;
      text-align: center;
    }
  }
}
</style>
