<template>
  <div id="app">
    <LoaderComponent @loading-complete="onLoadingComplete" />
    <div v-if="!isLoading">
      <HeaderMenu />
      <router-view></router-view>
      <FooterMenu />
    </div>
  </div>
</template>

<script>
import LoaderComponent from "./components/LoaderComponent.vue";
import HeaderMenu from "./components/HeaderMenu.vue";
import FooterMenu from "./components/FooterMenu.vue";

export default {
  components: {
    LoaderComponent,
    HeaderMenu,
    FooterMenu,
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    onLoadingComplete() {
      this.isLoading = false;
    }
  }
};
</script>

<style>
/* Global styles */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),
    url('/src/assets/images/skies_gta.jpg') center center / cover;
  color: white;
  font-family: 'Segoe UI', sans-serif;
}
</style>