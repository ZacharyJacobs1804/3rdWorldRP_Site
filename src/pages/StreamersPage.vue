<template>
  <div class="">
    <ServerStreamersComponent />
  </div>
</template>

<script>
import ServerStreamersComponent from '@/components/ServerStreamersComponent.vue';

export default {
  name: 'StreamersPage',
  components: {
    ServerStreamersComponent
  }
};
</script>

<style scoped>
.serverstreamers {
  width: 100%;
  min-height: 100vh;
}
</style>