<template>
  <div class="home">
    <HeroComponent />
    <AboutComponent />
    <TopStreamersComponent />
  </div>
</template>

<script>
import AboutComponent from "../components/AboutComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import TopStreamersComponent from "@/components/TopStreamersComponent.vue";

export default {
  name: 'HomePage',
  components: {
    HeroComponent,
    AboutComponent,
    TopStreamersComponent
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
</style>