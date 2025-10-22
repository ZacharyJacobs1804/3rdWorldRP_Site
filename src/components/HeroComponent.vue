<template>
  <section class="hero">
    <div class="hero-container">
      <!-- Left Side Content -->
      <div class="hero-content">
        <h1>WELCOME TO <span class="highlight">3RD WORLD RP</span></h1>
        <p class="tagline">Where realism meets respect</p>
        <p class="description">
          Join our immersive FiveM roleplay community where every decision matters. 
          Experience realistic law enforcement, emergency services, and civilian life.
        </p>
        <div class="button-group">
          <button class="primary-btn">JOIN THE SERVER</button>
          <button class="secondary-btn">VIEW SOPs</button>
        </div>
      </div>

      <!-- Right Side Images -->
      <div class="hero-images">
        <div class="image-grid">
          <div class="image-container main">
            <img src="../assets/images/3rdworld_bg.png" alt="3rdworld image" />
          </div>
          <div class="image-container">
            <img src="../assets/images/3rd_World_Building.png" alt="gtavimage" />
          </div>
          <div class="image-container">
            <img src="../assets/images/car_bg.png" alt="gtavimage" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 90vh;
  background: transparent;
  background-position: center center;
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-top: 80px; /* Add margin to account for fixed header */
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  padding: 2rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: white;
}

.highlight {
  color: #c4a128;
  text-shadow: 0 0 10px rgba(196, 161, 40, 0.3);
}

.tagline {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background: #c4a128;
  color: black;
}

.secondary-btn {
  background: transparent;
  border: 2px solid #c4a128;
  color: #c4a128;
}

.primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(196, 161, 40, 0.3);
}

.hero-images {
  position: relative;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  transform: perspective(1000px) rotateY(-15deg);
  transition: transform 0.3s ease;
}

.image-grid:hover {
  transform: perspective(1000px) rotateY(-5deg);
}

.image-container {
  position: relative;
  overflow: hidden;
  border: 2px solid #c4a128;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.image-container.main {
  grid-column: 1 / -1;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-content {
    text-align: center;
  }

  .button-group {
    justify-content: center;
  }

  .image-grid {
    transform: none;
  }
}
</style>
