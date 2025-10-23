<template>
  <header>
    <div class="logo-container">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="3RD WORLD RP Logo" class="logo" />
        <!-- <h1>3RD WORLD RP</h1> -->
      </router-link>
    </div>
    <nav>
      <a href="#">Staff</a>
      <router-link to="/rules">Rules</router-link>
      <router-link to="/departments">Job Applications</router-link>
      <router-link to="/streamers">Our Streamers</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 2px solid #c4a128; */
  position: fixed; /* Changed from sticky to fixed */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0));
  backdrop-filter: blur(8px);
  transition: background 0.3s ease;
}

/* header:hover {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
} */

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container a {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

h1 {
  color: #c4a128;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0; /* Add this to remove default margin */
}

nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c4a128;
  transition: width 0.3s ease;
}

nav a:hover {
  color: #c4a128;
}

nav a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  header {
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
