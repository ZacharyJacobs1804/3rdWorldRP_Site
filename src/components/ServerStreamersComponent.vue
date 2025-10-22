<template>
  <section class="streamers-wrap">
    <div class="container">
      <div class="cyber-title">
        <h2>TOP STREAMERS</h2>
        <div class="title-decor"><span></span><span></span><span></span></div>
      </div>

      <div class="grid">
        <article v-for="streamer in streamers" :key="streamer.id" class="card">
          <div class="avatar">
            <img
              :src="streamer.avatar || placeholder"
              :alt="streamer.name + ' avatar'"
            />
            <div v-if="streamer.live" class="live">LIVE</div>
          </div>

          <h3 class="name">{{ streamer.name }}</h3>
          <p class="role" v-if="streamer.role">{{ streamer.role }}</p>

          <div class="social-links">
            <a
              v-if="streamer.twitch"
              :href="streamer.twitch"
              target="_blank"
              rel="noopener"
              class="platform twitch"
              aria-label="Twitch"
            >
              <i class="fab fa-twitch"></i>
            </a>
            <a
              v-if="streamer.youtube"
              :href="streamer.youtube"
              target="_blank"
              rel="noopener"
              class="platform youtube"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              v-if="streamer.tiktok"
              :href="streamer.tiktok"
              target="_blank"
              rel="noopener"
              class="platform tiktok"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </article>
      </div>

      <div class="grid">
        <article v-for="streamer in streamers" :key="streamer.id" class="card">
          <div class="avatar">
            <img
              :src="streamer.avatar || placeholder"
              :alt="streamer.name + ' avatar'"
            />
            <div v-if="streamer.live" class="live">LIVE</div>
          </div>

          <h3 class="name">{{ streamer.name }}</h3>
          <p class="role" v-if="streamer.role">{{ streamer.role }}</p>

          <div class="social-links">
            <a
              v-if="streamer.twitch"
              :href="streamer.twitch"
              target="_blank"
              rel="noopener"
              class="platform twitch"
              aria-label="Twitch"
            >
              <i class="fab fa-twitch"></i>
            </a>
            <a
              v-if="streamer.youtube"
              :href="streamer.youtube"
              target="_blank"
              rel="noopener"
              class="platform youtube"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              v-if="streamer.tiktok"
              :href="streamer.tiktok"
              target="_blank"
              rel="noopener"
              class="platform tiktok"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </article>
      </div>

      <div class="grid">
        <article v-for="streamer in streamers" :key="streamer.id" class="card">
          <div class="avatar">
            <img
              :src="streamer.avatar || placeholder"
              :alt="streamer.name + ' avatar'"
            />
            <div v-if="streamer.live" class="live">LIVE</div>
          </div>

          <h3 class="name">{{ streamer.name }}</h3>
          <p class="role" v-if="streamer.role">{{ streamer.role }}</p>

          <div class="social-links">
            <a
              v-if="streamer.twitch"
              :href="streamer.twitch"
              target="_blank"
              rel="noopener"
              class="platform twitch"
              aria-label="Twitch"
            >
              <i class="fab fa-twitch"></i>
            </a>
            <a
              v-if="streamer.youtube"
              :href="streamer.youtube"
              target="_blank"
              rel="noopener"
              class="platform youtube"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              v-if="streamer.tiktok"
              :href="streamer.tiktok"
              target="_blank"
              rel="noopener"
              class="platform tiktok"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </article>
      </div>

      <div class="grid">
        <article v-for="streamer in streamers" :key="streamer.id" class="card">
          <div class="avatar">
            <img
              :src="streamer.avatar || placeholder"
              :alt="streamer.name + ' avatar'"
            />
            <div v-if="streamer.live" class="live">LIVE</div>
          </div>

          <h3 class="name">{{ streamer.name }}</h3>
          <p class="role" v-if="streamer.role">{{ streamer.role }}</p>

          <div class="social-links">
            <a
              v-if="streamer.twitch"
              :href="streamer.twitch"
              target="_blank"
              rel="noopener"
              class="platform twitch"
              aria-label="Twitch"
            >
              <i class="fab fa-twitch"></i>
            </a>
            <a
              v-if="streamer.youtube"
              :href="streamer.youtube"
              target="_blank"
              rel="noopener"
              class="platform youtube"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              v-if="streamer.tiktok"
              :href="streamer.tiktok"
              target="_blank"
              rel="noopener"
              class="platform tiktok"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServerStreamersComponent",
  data() {
    return {
      placeholder: "https://via.placeholder.com/300x300?text=Streamer",
      streamers: [
        // replace / extend with your real streamer data
        {
          id: 1,
          name: "XStreamMaster",
          avatar: null,
          role: "Top Streamer",
          live: true,
          twitch: "https://twitch.tv/streammaster",
          youtube: "https://youtube.com/streammaster",
          tiktok: "https://www.tiktok.com/@streammaster",
        },
        {
          id: 2,
          name: "ProGamer2",
          avatar: null,
          role: "Raid Lead",
          live: false,
          twitch: "https://twitch.tv/progamer2",
          youtube: "https://youtube.com/progamer2",
          tiktok: "https://www.tiktok.com/@progamer2",
        },
        {
          id: 3,
          name: "GameQueen",
          avatar: null,
          role: "Event Host",
          live: true,
          twitch: "https://twitch.tv/gamequeen",
          youtube: "https://youtube.com/gamequeen",
          tiktok: "https://www.tiktok.com/@gamequeen",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Hero color scheme: primary #FFA500 (orange), secondary #800080 (purple) */
/* Elegant gaming look with larger cards and generous spacing */

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

.streamers-wrap {
  padding: 140px 20px 80px; /* extra top space from nav */
  color: #fff;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px; /* more horizontal breathing room */
}

/* header */
.header {
  text-align: center;
  margin-top: 24px;
  margin-bottom: 40px;
}
.header h2 {
  font-size: 2.6rem;
  letter-spacing: 2px;
  margin: 0;
  background: linear-gradient(90deg, #ffffff 0%, #c4a128 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 8px 28px rgba(128, 0, 128, 0.1);
  font-weight: 800;
}

/* grid: allow large cards, keep space around them */
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(330px, 1fr)
  ); /* bigger min width for large cards */
  gap: 36px; /* larger gaps between cards */
  align-items: start;

  margin: 40px 0; /* vertical space around grid */
  padding: 18px; /* inner padding so cards never touch edges */
  box-sizing: border-box;
  justify-items: center;
}

/* card: larger, taller, with stronger presence */
.card {
  width: 100%;
  max-width: 460px; /* prevent cards from becoming excessively wide */
  min-height: 380px; /* taller cards for content & presence */
  background: rgba(0, 0, 0, 0.66);
  border: 2px solid rgba(255, 165, 0, 0.14);
  border-radius: 14px;
  padding: 24px 22px; /* increased padding */
  text-align: center;
  transition: transform 0.32s cubic-bezier(0.2, 0.9, 0.3, 1),
    box-shadow 0.32s ease;
  box-shadow: 0 10px 30px rgba(128, 0, 128, 0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.card:hover {
  transform: translateY(-10px) scale(1.01);
  box-shadow: 0 36px 80px rgba(255, 165, 0, 0.1);
}

/* Avatar: larger and more prominent */
.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto 16px;
  overflow: hidden;
  border: 4px solid #c4a128;
  position: relative;
  flex: 0 0 auto;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.live {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #800080;
  color: #fff;
  padding: 6px 10px;
  font-size: 0.8rem;
  border-radius: 6px;
  box-shadow: 0 8px 22px rgba(255, 165, 0, 0.06);
  font-weight: 800;
}

/* name & role: larger typography */
.name {
  margin: 14px 0 6px;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  color: #fff;
}
.role {
  margin: 0 0 16px;
  color: #e6e6e6;
  font-size: 1rem;
}

/* social links: slightly larger actionable targets */
.social-links {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: auto; /* push socials to bottom for consistent layout */
}
.social-links .platform {
  font-size: 1.6rem;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #ffa500;
  transition: all 0.22s ease;
  background: rgba(255, 165, 0, 0.03);
  border: 1px solid rgba(255, 165, 0, 0.06);
}

/* platform hover colors */
.social-links .platform.twitch:hover {
  color: #6441a5;
  box-shadow: 0 10px 26px rgba(100, 65, 165, 0.12);
  transform: scale(1.06);
}
.social-links .platform.youtube:hover {
  color: #ff0000;
  box-shadow: 0 10px 26px rgba(255, 0, 0, 0.12);
  transform: scale(1.06);
}

/* TikTok: cyan + pink glow */
.social-links .platform.tiktok:hover {
  color: #ffffff;
  transform: scale(1.06);
  text-shadow: -2px 0 #00f2ea, 2px 0 #ff0050;
  box-shadow: 0 8px 28px rgba(0, 242, 234, 0.06),
    0 8px 28px rgba(255, 0, 80, 0.04);
}

/* subtle icon backgrounds on hover */
.social-links .platform:hover {
  background: linear-gradient(
    90deg,
    rgba(255, 165, 0, 0.04),
    rgba(128, 0, 128, 0.02)
  );
  border-color: rgba(255, 165, 0, 0.12);
}

/* responsive tweak: keep cards large but readable on small screens */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 28px;
  }
  .card {
    max-width: 520px;
    min-height: 360px;
    padding: 22px;
  }
}
@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px;
  }
  .header h2 {
    font-size: 1.6rem;
  }
  .avatar {
    width: 140px;
    height: 140px;
  }
  .card {
    min-height: 320px;
    padding: 20px;
  }
}
</style>

<!-- Note: include Font Awesome in your index.html head if not present:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> -->
