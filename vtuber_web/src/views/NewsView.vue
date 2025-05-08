<template>
  <div class="news">
    <div class="news-container">
      <h1>News</h1>
      
      <div class="news-grid">
        <article v-for="(item, index) in newsItems" :key="index" class="news-card">
          <div class="news-image">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="news-content">
            <h3>{{ item.title }}</h3>
            <p class="date">{{ item.date }}</p>
            <p class="description">{{ item.description }}</p>
            <a v-if="item.link" :href="item.link" target="_blank" class="read-more">
              Read More
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import doraemonCover from '@/assets/news/doraemon_cover.jpg'
import collabStream from '@/assets/news/collab_stream.jpg'
import newMerch from '@/assets/news/new_merch.jpg'

const newsItems = [
  {
    date: '2024-03-20',
    title: '新曲リリースのお知らせ',
    description: '新曲「Song Title」のリリースが決定しました！詳細は後日お知らせします。',
    image: doraemonCover,
    link: '#'
  },
  {
    date: '2024-03-19',
    title: 'コラボ配信のお知らせ',
    description: '3月25日に他のVTuberとのコラボ配信が決定しました！',
    image: collabStream,
    link: '#'
  },
  {
    date: '2024-03-18',
    title: '新グッズ発売のお知らせ',
    description: '新作グッズの発売が決定しました。オンラインショップでご購入いただけます。',
    image: newMerch,
    link: '#'
  }
]
</script>

<style>
/* 全局樣式 */
.fa-arrow-right {
  color: #042183;
}
</style>

<style scoped>
.news {
  padding-top: 80px;
  background-color: #DEEBEC;
  min-height: 100vh;
  color: #042183;
  width: 100%;
  overflow-x: hidden;
}

.news-container {
  width: 100%;
  max-width: none;
  padding: 4rem 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #042183;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.news-card:hover {
  transform: translateY(-5px);
}


.news-image {
  aspect-ratio: 16/9;
  background: #F7F7F7;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.news-content {
  padding: 1.5rem;
  background: #F7F7F7;
}

.news-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #042183;
}

.date {
  color: #042183;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: #042183;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 0.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #042183;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: bold;
  transition: opacity 0.3s;
  background-color: #D9D9D9;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.read-more:hover {
  opacity: 0.8;
}


/* 電腦版樣式 */
@media (min-width: 1024px) {
  .news-container {
    padding: 6rem 4rem;
  }

  .news-grid {
    gap: 3rem;
  }

  .news-content h3 {
    font-size: 1.4rem;
  }

  .description {
    font-size: 1rem;
  }
}

/* 平板版樣式 */
@media (min-width: 768px) and (max-width: 1023px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* 手機版樣式 */
@media (max-width: 767px) {
  .news-container {
    padding: 3rem 1rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .news-content h3 {
    font-size: 1.1rem;
  }
}
</style> 