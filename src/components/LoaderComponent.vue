<template>
  <div v-if="loading" id="loader">
    <video class="background-video" autoplay muted loop>
      <source src="../assets/videos/FiveM_Globe_Animated.mp4" type="video/mp4">
    </video>
    <div class="overlay"></div>
    <div class="loader-content">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { loading: true };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      this.$emit('loading-complete');
    }, 2000);
  }
};
</script>

<style scoped>
#loader {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Darkened overlay */
  z-index: -1;
}

.loader-content {
  position: relative;
  z-index: 1;
}

.bar {
  width: 200px;
  height: 10px;
  background: rgba(51, 51, 51, 0.8);
  border: 2px solid #c4a128;
  overflow: hidden;
  border-radius: 5px;
}

.bar::before {
  content: '';
  display: block;
  height: 100%;
  width: 0;
  background: #c4a128;
  animation: load 2s linear forwards;
}

@keyframes load {
  to { width: 100%; }
}
</style>