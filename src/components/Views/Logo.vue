<template>
  <div class="logo">
    <img
      src="../../assets/logo.png"
      width="60px"
      class="pulse-slow"
      alt="Vue logo">
    <h1>{{ $t('logo.title') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .logo {
    text-align: center;

    h1 {
      margin-top: 0
    }
  }
</style>
