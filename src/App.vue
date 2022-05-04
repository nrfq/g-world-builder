<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  // import for custom scss
  @import 'assets/custom-vars.scss';
  //import for bootstrap defaults
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
