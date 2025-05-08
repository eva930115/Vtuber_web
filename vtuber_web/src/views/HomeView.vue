<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TUCivc_agyc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="latest-news animate-on-scroll">
      <div class="section-container">
        <h2>NEWS</h2>
        <div class="news-grid">
          <article v-for="(item, index) in newsItems" :key="index" class="news-card">
            <div class="news-image">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="news-content">
              <h3>{{ item.title }}</h3>
              <p class="date">{{ item.date }}</p>
              <p class="description">{{ item.description }}</p>
            </div>
          </article>
        </div>
        <div class="section-footer">
          <a href="/news" class="view-all">查看全部新聞</a>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section id="about" class="about-preview animate-on-scroll">
      <div class="section-container">
        <h2>ABOUT</h2>
        <div class="about-preview-content">
          <div class="about-image">
            <img src="@/assets/profile1.png" alt="VTuber Profile">
          </div>
          <div class="about-text">
            <p>こんにちは！私はVTuberです。ゲーム実況、歌配信、雑談配信など、様々なコンテンツを配信しています。</p>
            <p>ファンの皆様と一緒に楽しい時間を過ごすことが大好きです！</p>
            <a href="/about" class="read-more">查看更多</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Videos Section -->
    <section id="videos" class="latest-videos animate-on-scroll">
      <div class="section-container">
        <h2>MOVIE</h2>
        <div class="video-grid">
          <article v-for="(video, index) in latestVideos" :key="index" class="video-card">
            <div class="thumbnail">
              <img :src="video.thumbnail" :alt="video.title">
              <span class="duration">{{ video.duration }}</span>
            </div>
            <div class="video-info">
              <h3>{{ video.title }}</h3>
              <p class="date">{{ video.date }}</p>
            </div>
          </article>
        </div>
        <div class="section-footer">
          <a href="/movie" class="view-all">查看全部影片</a>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section id="shop" class="featured-products animate-on-scroll">
      <div class="section-container">
        <h2>SHOP</h2>
        <div class="product-grid">
          <article v-for="(product, index) in featuredProducts" :key="index" class="product-card">
            <div class="product-image">
              <img :src="product.image" :alt="product.name">
              <div v-if="product.isNew" class="new-badge">新品</div>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="price">¥{{ product.price.toLocaleString() }}</p>
            </div>
          </article>
        </div>
        <div class="section-footer">
          <a href="/shop" class="view-all">查看全部商品</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 處理滾動動畫
const handleScroll = () => {
  const sections = document.querySelectorAll('.latest-news, .about-preview, .latest-videos, .featured-products')
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const isVisible = (rect.top <= window.innerHeight * 0.8)
    if (isVisible) {
      section.style.opacity = '1'
      section.style.transform = 'translateY(0)'
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始觸發一次以處理首屏內容
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const latestVideos = [
  {
    title: '💧 桜の花びらたち / 紡木こかげ【歌ってみた】',
    date: '2025-03-19',
    duration: '05:18',
    thumbnail: '/src/assets/thumbnails/movie1.png'
  },
  {
    title: '【💧 夢をかなえてドラえもん / 紡木こかげ【歌ってみた】',
    date: '2024-10-26',
    duration: '04:10',
    thumbnail: '/src/assets/thumbnails/movie2.png'
  },
  {
    title: '【💧 深海少女 / 紡木こかげ【歌ってみた】',
    date: '2025-05-03',
    duration: '03:35',
    thumbnail: '/src/assets/thumbnails/movie3.png'
  }
]

const featuredProducts = [
  {
    name: 'アクリルキーホルダー',
    price: 1000,
    image: '/src/assets/products/AcrylicKeychain.jpg',
    isNew: true
  },
  {
    name: 'ジャージ',
    price: 7500,
    image: '/src/assets/products/Jersey.jpg',
    isNew: false
  },
  {
    name: '衣装メタルキーホルダー',
    price: 1500,
    image: '/src/assets/products/Keychain.jpg',
    isNew: true
  }
]

const newsItems = [
  {
    title: '「夢をかなえてドラえもん」歌ってみた公開',
    date: '2024-10-15',
    description: '紡木こかげが「夢をかなえてドラえもん」のカバー動画を公開しました。彼女の優しい歌声をぜひお聴きください。',
    image: '/src/assets/news/doraemon_cover.jpg'
  },
  {
    title: 'ぶいすぽっ！メンバーとのコラボ配信',
    date: '2024-09-25',
    description: '紡木こかげがぶいすぽっ！の先輩メンバーと楽しいコラボ配信を行いました。笑いあり、感動ありの配信をお見逃しなく。',
    image: '/src/assets/news/collab_stream.jpg'
  },
  {
    title: '新作グッズ発売決定！',
    date: '2024-08-30',
    description: '紡木こかげの新作グッズがオンラインショップで発売開始！ファン必見のアイテムが盛りだくさんです。',
    image: '/src/assets/news/new_merch.jpg'
  }
]
</script>

<style scoped>
.home {
  background-color: #DEEBEC;
  color: #000;
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #DEEBEC;
  width: 100%;
}

.hero-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DEEBEC;
  margin: 0 auto;        /* 置中 */
  padding: 0 4rem;       /* 左右空間 */
  
}

.video-container {
  position: relative;
  width: 1153px;
  height: 636px;
  background: #DEEBEC;
  
  
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Common Section Styles */
.section-container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #042183;
  text-align: center;
  font-weight: bold;
  letter-spacing: 30%;
}

/* About Preview Section */
.about-preview {
  background-color: #F7F7F7;
  width: 100%;
}

.about-preview-content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 0 2rem;
}

.about-image {
  flex: 0 0 200px;
}

.about-image img {
  width: 100%;
  height: auto;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #888;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #042183;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: bold;
  transition: all 0.3s;
  background-color: #D9D9D9;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.read-more:hover {
  opacity: 0.8;
}

/* Latest Videos Section */
.latest-videos {
  background-color: #FFFFFF;
  width: 100%;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.video-card {
  background: #F7F7F7;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);
}

.thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.video-card:hover .thumbnail img {
  filter: brightness(1.2);
}

.duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #fff;
}

.video-info {
  padding: 1rem;
}

.video-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.date {
  color: #888;
  font-size: 0.9rem;
}

/* Featured Products Section */
.featured-products {
  background-color: #DEEBEC;
  width: 100%;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.product-card {
  background: #F7F7F7;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  position: relative;
  aspect-ratio: 1;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff69b4;
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-info {
  padding: 1rem;
}

.product-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.price {
  color: #ff69b4;
  font-weight: bold;
}

/* Latest News Section */
.latest-news {
  background-color: #FFFFFF;
  width: 100%;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.news-card {
  background: #F7F7F7;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  aspect-ratio: 16/9;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  padding: 1.5rem;
}

.news-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.description {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 0.5rem;
}

/* Section Footer */
.section-footer {
  text-align: center;
  margin-top: 3rem;
}

.view-all {
  display: inline-flex;
  align-items: center;
  color: #042183;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  background-color: #D9D9D9;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.view-all:hover {
  opacity: 0.8;
}

/* 電腦版樣式 */
@media (min-width: 1024px) {
  .section-container {
    padding: 6rem 4rem;
  }

  .about-preview-content {
    padding: 0 4rem;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .about-image {
    flex: 0 0 500px;
  }

  .about-text p {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .video-card,
  .product-card,
  .news-card {
    transition: transform 0.3s;
  }

  .video-card:hover,
  .product-card:hover,
  .news-card:hover {
    transform: translateY(-10px);
  }

  .video-info h3,
  .product-info h3,
  .news-content h3 {
    font-size: 1.3rem;
  }

  .read-more,
  .view-all {
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
  }

  .video-grid,
  .product-grid,
  .news-grid {
    max-width: 1200px;
    margin: 0 auto;
  }

  .video-container {
    width: 1153px;
    height: 636px;
  }
}

/* 平板版樣式 */
@media (min-width: 768px) and (max-width: 1023px) {
  .video-grid,
  .product-grid,
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .video-container {
    width: 90%;
    height: auto;
    aspect-ratio: 1153/636;
  }
}

/* 手機版樣式 */
@media (max-width: 767px) {
  .section-container {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .about-preview-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .about-image {
    flex: none;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .video-grid,
  .product-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }

  .read-more,
  .view-all {
    width: 100%;
    justify-content: center;
  }

  .video-container {
    width: 95%;
    height: auto;
    aspect-ratio: 1153/636;
  }
}

/* 滾動動畫 */
section {
  scroll-margin-top: 80px; /* 導航欄高度 */
}

/* 滾動時的平滑效果 */
html {
  scroll-behavior: smooth;
}

/* 動畫效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.latest-news,
.about-preview,
.latest-videos,
.featured-products {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.latest-news {
  animation-delay: 0.2s;
}

.about-preview {
  animation-delay: 0.4s;
}

.latest-videos {
  animation-delay: 0.6s;
}

.featured-products {
  animation-delay: 0.8s;
}

/* 當元素進入視窗時觸發動畫 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 