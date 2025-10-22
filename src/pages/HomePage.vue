<template>
  <div class="home">
    <HeroComponent />
    <AboutComponent />
    <DepartmentsComponent />
    <JoinComponent />
  </div>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import DepartmentsComponent from "../components/DepartmentsComponent.vue";
import JoinComponent from "../components/JoinComponent.vue";

export default {
  name: 'HomePage',
  components: {
    HeroComponent,
    AboutComponent,
    DepartmentsComponent,
    JoinComponent,
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
</style>