<template>
  <div class="streamers-section">
    <div class="cyber-title">
      <h2>TOP STREAMERS</h2>
      <div class="title-decor">
        <span></span><span></span><span></span>
      </div>
    </div>

    <div class="streamers-container">
      <!-- Streamer Card 1 -->
      <div class="streamer-card">
        <div class="card-frame"></div>
        <div class="streamer-content">
          <div class="streamer-avatar">
            <img src="../assets/images/streamers/clarashade.png" alt="Streamer 1">
            <div class="live-badge">LIVE</div>
          </div>
          <h3 class="streamer-name">Courtez NightShade</h3>
          <div class="social-links">
            <a href="https://twitch.tv/streammaster" target="_blank">
              <i class="fab fa-twitch"></i>
            </a>
            <a href="https://youtube.com/streammaster" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com/@streammaster" target="_blank">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Streamer Card 2 -->
      <div class="streamer-card">
        <div class="card-frame"></div>
        <div class="streamer-content">
          <div class="streamer-avatar">
            <img src="../assets/images/streamers/Logo_with_CAT.png" alt="Streamer 2">
            <div class="live-badge">LIVE</div>
          </div>
          <h3 class="streamer-name">x_NukieGaming_x</h3>
          <div class="social-links">
            <a href="https://twitch.tv/progamer2" target="_blank">
              <i class="fab fa-twitch"></i>
            </a>
            <a href="https://youtube.com/progamer2" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com/@streammaster" target="_blank">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Streamer Card 3 -->
      <div class="streamer-card">
        <div class="card-frame"></div>
        <div class="streamer-content">
          <div class="streamer-avatar">
            <img src="../assets/images/profile_image.png" alt="Streamer 3">
            <div class="live-badge">LIVE</div>
          </div>
          <h3 class="streamer-name">GameQueen</h3>
          <div class="social-links">
            <a href="https://twitch.tv/gamequeen" target="_blank">
              <i class="fab fa-twitch"></i>
            </a>
            <a href="https://youtube.com/gamequeen" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com/@streammaster" target="_blank">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StreamersComponent'
}
</script>

<style scoped>
.streamers-section {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
}

.cyber-title {
  text-align: center;
  margin-bottom: 50px;
}

.cyber-title h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 2px 2px #c4a128, -2px -2px #c4a128;
  letter-spacing: 5px;
}

.title-decor {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.title-decor span {
  width: 50px;
  height: 3px;
  background: #c4a128;
}

.title-decor span:nth-child(2) {
  width: 100px;
  background: #ff0000;
}

.streamers-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px 0;
  align-items: center;
  min-height: 500px;
  margin-top: -40px;
}

.streamer-card {
  position: relative;
  background: transparent;
  border: 2px solid #c4a128;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-origin: center center;
}

/* Side cards styling */
.streamer-card:first-child,
.streamer-card:last-child {
  transform: scale(0.9);
  opacity: 0.8;
  margin-top: 40px;
}

/* Middle card styling */
.streamer-card:nth-child(2) {
  transform: scale(1.1);
  z-index: 2;
  border-width: 3px;
  box-shadow: 0 0 30px rgba(255, 165, 0, 0.3);
}

/* Hover effects */
.streamer-card:first-child:hover,
.streamer-card:last-child:hover {
  transform: scale(0.95);
  opacity: 0.9;
  box-shadow: 0 0 20px rgba(255, 165, 0, 0.2);
}

.streamer-card:nth-child(2):hover {
  transform: scale(1.15);
  box-shadow: 0 0 40px rgba(255, 165, 0, 0.4);
}

.card-frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #ffffff;
  clip-path: polygon(0 0, 20px 0, 20px 20px, 0 20px, 0 0, 100% 0, 100% 20px, calc(100% - 20px) 20px, calc(100% - 20px) 0);
  pointer-events: none;
}

.streamer-avatar {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  border: 3px solid #FFA500;
  border-radius: 50%;
  overflow: hidden;
}

.streamer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.live-badge {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff0000;
  color: white;
  padding: 2px 10px;
  font-size: 0.8rem;
  border-radius: 3px;
  animation: pulse 2s infinite;
}

.streamer-name {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-links a {
  color: #FFA500;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

/* Platform-specific hover colors */
.social-links a .fa-twitch:hover {
  color: #6441a5; /* Twitch purple */
  transform: scale(1.2);
  text-shadow: 0 0 10px rgba(100, 65, 165, 0.6);
}

.social-links a .fa-youtube:hover {
  color: #ff0000; /* YouTube red */
  transform: scale(1.2);
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
}

.social-links a .fa-twitter:hover {
  color: #1da1f2; /* Twitter blue */
  transform: scale(1.2);
  text-shadow: 0 0 10px rgba(29, 161, 242, 0.6);
}

/* Update the TikTok hover style */
.social-links a .fa-tiktok:hover {
  color: #fff; /* TikTok white */
  transform: scale(1.2);
  text-shadow: 
    -2px -2px #00f2ea,  /* TikTok cyan */
     2px 2px #ff0050;   /* TikTok pink */
  animation: tiktok-glitch 0.5s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes tiktok-glitch {
  0% {
    text-shadow: 
      -2px -2px #00f2ea,
       2px 2px #ff0050;
  }
  50% {
    text-shadow: 
      2px 2px #00f2ea,
      -2px -2px #ff0050;
  }
  100% {
    text-shadow: 
      -2px -2px #00f2ea,
       2px 2px #ff0050;
  }
}

@media (max-width: 768px) {
  .streamers-container {
    grid-template-columns: 1fr;
  }
  
  .cyber-title h2 {
    font-size: 2rem;
  }
}
</style>