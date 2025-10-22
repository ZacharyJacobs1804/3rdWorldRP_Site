<template>
  <div class="page-container">
    <section class="about" id="about">
      <div class="about-container">
        <h2>ABOUT <span class="highlight">3RD WORLD RP</span></h2>
        
        <div class="about-grid">
          <div class="about-text">
            <div class="mission-box">
              <h3>Our Mission</h3>
              <p>Creating an immersive roleplay experience where every player's story matters. We pride ourselves on maintaining high standards of realism and professionalism in our FiveM community.</p>
            </div>

            <div class="features-box">
              <h3>What Sets Us Apart</h3>
              <ul>
                <li>Professional Staff Team</li>
                <li>Active Community Support</li>
                <li>Regular Events & Updates</li>
                <li>Detailed SOPs & Guidelines</li>
              </ul>
            </div>
          </div>

          <div class="about-stats">
            <div class="stat-box">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Server Uptime</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">100+</span>
              <span class="stat-label">Active Members</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">10+</span>
              <span class="stat-label">Departments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 80px; /* Account for fixed header */
}

.about {
  padding: 100px 20px;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8));
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

/* ... rest of the styles from previous AboutComponent ... */
</style>