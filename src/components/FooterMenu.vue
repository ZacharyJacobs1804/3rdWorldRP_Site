<template>
  <footer>
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-section">
          <h4>About Us</h4>
          <p>3RD WORLD RP - Professional Gaming Community</p>
          <p>&copy; 2025 3RD WORLD RP. All rights reserved.</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <nav>
            <a href="#about">About</a>
            <a href="#join">Join Us</a>
            <a href="#">Standard Operating Procedures</a>
            <a href="#">Community Guidelines</a>
          </nav>
        </div>

        <div class="footer-section">
          <h4>Connect With Us</h4>
          <div class="social-icons">
            <a href="#" class="icon discord" aria-label="Join our Discord community">
              <i class="fab fa-discord"></i>
            </a>
            <a href="#" class="icon youtube" aria-label="Subscribe to our YouTube channel">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="icon tiktok" aria-label="Follow us on TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: transparent;
  color: #ffffff;
  /* border-top: 2px solid #c4a128; */
  padding: 40px 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Changed to fixed 3 columns */
  gap: 100px; /* Increased gap between sections */
  text-align: left;
  padding: 20px 0;
}

.footer-section {
  position: relative;
  padding: 20px;
  border: 1px solid rgba(196, 161, 40, 0.1);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.footer-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(196, 161, 40, 0.2);
}

.footer-section h4 {
  color: #c4a128;
  font-size: 1.4rem; /* Slightly larger */
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(196, 161, 40, 0.3);
}

.footer-section p {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.footer-section nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-section nav a {
  color: #cccccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-section nav a:hover {
  color: #c4a128;
  padding-left: 5px;
}

.social-icons {
  display: flex;
  gap: 30px; /* Increased gap */
  margin-top: 20px;
}

.icon {
  color: #c4a128;
  font-size: 1.8rem; /* Larger icons */
  transition: transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease;
}

.icon:hover {
  color: #ffffff;
  transform: translateY(-3px);
  text-shadow: 0 0 20px rgba(196, 161, 40, 0.5);
}

@media (max-width: 1200px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .footer-section nav {
    align-items: center;
  }
  
  .social-icons {
    justify-content: center;
  }
}

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
</style>