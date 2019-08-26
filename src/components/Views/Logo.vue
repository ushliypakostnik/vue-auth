<template>
  <div class="logo">
    <img src="../../assets/logo.png" width="70px">
    <h1>Vue cli based frontend boilerplate</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
  @import '@/styles/_stylebase.scss';

  .logo {
    text-align: center;

    h1 {
      margin-top: $size / 2;
    }
  }
</style>
