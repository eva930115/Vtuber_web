<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" @click="scrollToTop" class="logo">
          <img src="@/assets/logo.png" alt="Logo">
        </router-link>
      </div>
      
      <div class="nav-center">
        <router-link to="/news">NEWS</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/movie">MOVIE</router-link>
        <router-link to="/shop">SHOP</router-link>
        <router-link to="/guide">Guide Line</router-link>
      </div>

      <div class="nav-right">
        <a href="https://www.youtube.com/@Kokage_Tsumugi" target="_blank" class="social-icon">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://x.com/kokage_tsumugi" target="_blank" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <router-link to="/contact" class="contact-btn">
          <img src="/src/assets/Contact.png" alt="Contact" class="contact-img">
        </router-link>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  background-color: #000;
  color: #fff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(247, 247, 247, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container .logo img {
  height: 40px;
}

.nav-center {
  display: flex;
  gap: 2rem;
}

.nav-center a {
  color: #042183;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.nav-center a:hover {
  opacity: 0.8;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.social-icon {
  color: #042183;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icon:hover {
  opacity: 0.8;
}

.contact-btn {
  text-decoration: none;
  transition: opacity 0.3s;
}

.contact-btn:hover {
  opacity: 0.8;
}

.contact-img {
  height: 40px;
  width: auto;
}

/* 頁面切換動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
