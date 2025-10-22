<template>
  <section class="about-section">
    <!-- Prominent centered header placed at the top of the container -->
    <div class="about-header" aria-hidden="false">
      <div class="header-inner">
        <div class="cyber-title">
          <h1 class="about-title">About Us</h1>
          <p class="about-lead">3rd World RP — immersive, community-first roleplay with high-quality assets and values-driven leadership.</p>
        </div>

        <div class="header-accent" aria-hidden="true"></div>
      </div>
    </div>

    <div class="about-inner">
      <!-- LEFT: Image cluster -->
      <div class="images-col" aria-hidden="false">
        <div class="images-grid">
          <div class="img img-1" v-if="images[0]">
            <img :src="images[0]" alt="About image 1" />
          </div>
          <div class="img img-2" v-if="images[1]">
            <img :src="images[1]" alt="About image 2" />
          </div>
          <div class="img img-3" v-if="images[2]">
            <img :src="images[2]" alt="About image 3" />
          </div>
        </div>
      </div>

      <!-- RIGHT: Mission + What we serve -->
      <div class="content-col">
        <h2 class="title">Our Mission</h2>
        <p class="mission">
          At 3rd World RP, our mission is to deliver an immersive, values-driven roleplay experience that blends authenticity, creativity, and community. We strive to build a drama-free environment where respect, realism, and high standards guide every interaction. Through legitimate scripts, premium MLOs, and visionary design, we empower players to tell compelling stories and shape a world that feels alive, inclusive, and unforgettable.
        </p>

        <h3 class="subtitle">What Sets 3rd World RP Apart</h3>
        <ul class="services">
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Authenticity First
          </li>
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Legitimate, High-Quality Assets
          </li>
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Advanced Visual Identity
          </li>
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Values-Driven Community Culture
          </li>
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Curated Roleplay Standards
          </li>
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Hands-On Leadership
          </li>
          <li>
            <i class="fa-solid fa-check check-icon" aria-hidden="true"></i>
            Global Perspective, Local Flavor
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      // Ensure three items to avoid runtime null component errors
      images: [
        require("@/assets/images/gtav.png"),
        require("@/assets/images/about_1.jpg"),
        require("@/assets/images/about_2.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.cyber-title {
  text-align: center;
  margin-bottom: 0px;
}

.cyber-title h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 2px 2px #c4a128, -2px -2px #c4a128;
  letter-spacing: 5px;
}
.about-section {
  margin-top: 60px;
  padding: 28px 20px 40px;
  color: #f3f3f3;
  border-radius: 12px;
}

/* Prominent header at top */
.about-header {
  display: flex;
  justify-content: center; /* center across container */
  width: 100%;
  margin-bottom: 80px;
  pointer-events: none; /* decorative */
}
.header-inner {
  width: 100%;
  max-width: 980px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  padding: 18px 22px;
  border-radius: 14px;
  transform: translateY(-6px);
  transition: transform 240ms ease, box-shadow 240ms ease;
}

/* badge left of title (centered visually above content) */
.about-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
}

/* group text vertically; keep centered */
.header-text {
  text-align: center;
  max-width: 820px;
}

/* big eye-catching title */
.about-title {
  margin: 0;
  font-size: 30px;
  line-height: 1;
  color: #fff6d9;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 800;
  margin-bottom: 20px;
}

/* supportive lead text */
.about-lead {
  margin: 6px 0 0 0;
  color: #ffffff;
  font-size: 14px;
  opacity: 0.95;
}

/* small decorative accent stripe under header */
.header-accent {
  width: 64px;
  height: 6px;
  border-radius: 6px;
  margin-top: 12px;
  background: linear-gradient(90deg, rgba(196,161,40,1), rgba(253, 47, 47, 0.9));
  box-shadow: 0 8px 20px rgba(127,211,255,0.08);
}

/* hover / focus lift when user interacts */
.header-inner:hover,
.header-inner:focus-within {
  transform: translateY(-10px) scale(1.01);
  box-shadow: 0 16px 40px rgba(2,6,23,0.55);
}

/* layout */
.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}

/* LEFT: modern stacked images */
.images-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.images-grid {
  width: 100%;
  max-width: 520px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  position: relative;
}
.img {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(2,6,23,0.6);
  transform-origin: center;
  transition: transform 300ms ease, box-shadow 300ms ease;
  background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
}
.img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* playful offsets for modern overlapping look */
.img-1 { grid-column: 1 / 2; grid-row: 1 / 3; transform: rotate(-2deg) translateX(-6%); z-index: 3;}
.img-2 { grid-column: 2 / 3; grid-row: 1 / 2; transform: rotate(3deg) translateY(-6%); z-index: 4;}
.img-3 { grid-column: 2 / 3; grid-row: 2 / 3; transform: rotate(-1.5deg) translateX(6%); z-index: 2;}

/* hover lift */
.img:hover { transform: scale(1.03); box-shadow: 0 18px 40px rgba(2,6,23,0.75); }

/* RIGHT: text content */
.content-col .eyebrow {
  display: inline-block;
  color: #ffffff;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.title {
  margin: 6px 0 12px 0;
  font-size: 24px;
  color: #c4a128;
}
.mission {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 18px;
}
.subtitle {
  margin-top: 6px;
  font-size: 18px;
  color: #c4a128;
}
.services {
  list-style: none;
  padding: 0;
  margin: 12px 0 18px 0;
}
.services li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: #ffffff;
}
.check-icon {
  color: #c4a128;
  margin-right: 8px;
  font-size: 16px;
  flex: 0 0 auto;
}

/* responsive */
@media (max-width: 880px) {
  .header-inner { padding: 14px 16px; max-width: 92%; }
  .about-title { font-size: 22px; }
  .about-badge { width: 36px; height: 36px; }
  .header-accent { width: 48px; height: 5px; margin-top: 10px; }

  .about-header { position: relative; top: 0; margin-bottom: 12px; }
  .about-inner { grid-template-columns: 1fr; gap: 18px; }
  .images-grid { max-width: 100%; grid-template-columns: 1fr 1fr; grid-template-rows: none; }
  .img-1 { grid-column: 1 / 3; grid-row: 1 / 2; transform: rotate(0) translateX(0); }
  .img-2, .img-3 { transform: rotate(0); }
}
</style>