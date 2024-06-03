<template>
  <div id="app">
    <MainMenu />
    <IndexPage />
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import IndexPage from './components/IndexPage.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    IndexPage,
  },
};
</script>

<style>
</style>
