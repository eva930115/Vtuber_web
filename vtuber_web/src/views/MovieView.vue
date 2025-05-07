<template>
  <div class="movie">
    <div class="movie-container">
      <h1>Movie</h1>
      
      <div class="category-filter">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['category-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="movie-grid">
        <article v-for="(video, index) in filteredVideos" :key="index" class="movie-card">
          <div class="thumbnail">
            <img :src="video.thumbnail" :alt="video.title">
            <span class="duration">{{ video.duration }}</span>
          </div>
          <div class="video-info">
            <h2>{{ video.title }}</h2>
            <p class="date">{{ video.date }}</p>
            <p class="description">{{ video.description }}</p>
            <a :href="video.link" target="_blank" class="watch-btn">
              <i class="fas fa-play"></i> 觀看影片
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['全部', '遊戲實況', '歌回', '雜談', '合作']
const selectedCategory = ref('全部')

const videos = [
  {
    title: '【雑談】15万人ありがとう！',
    date: '2024-04-01',
    duration: '1:41:17',
    description: 'チャンネル登録者15万人達成！感謝の気持ちを込めて雑談しました。',
    thumbnail: '/src/assets/thumbnails/150k_thanks.jpg',
    category: '雜談',
    link: 'https://www.youtube.com/watch?v=Md8YMzRtPOE'
  },
  {
    title: '【VALORANT】うひちゃんと新マップをお散歩！',
    date: '2024-06-15',
    duration: '2:00:00',
    description: 'うひちゃんと一緒にVALORANTの新マップを探索しました！',
    thumbnail: '/src/assets/thumbnails/valorant_collab.jpg',
    category: '合作',
    link: 'https://www.youtube.com/watch?v=HzG6AjGlGOg'
  },
  {
    title: '【VALORANT】この間フラクチャーで1キルで試合終了したのがあまりにも苦しかったからかその日の夢にフラクチャーが出てきたんだけど何故かオーバータイムだった',
    date: '2025-02-15',
    duration: '1:30:00',
    description: 'フラクチャーでの苦い経験を語る配信です。',
    thumbnail: '/src/assets/thumbnails/valorant_fracture.jpg',
    category: '遊戲實況',
    link: 'https://www.youtube.com/watch?v=1DuWO8gjTsY'
  },
  {
    title: '【VALORANT】めちゃ久しぶりなんだがいけるんかわれえ',
    date: '2024-07-23',
    duration: '2:00:00',
    description: '久しぶりのVALORANT配信、腕前は健在か！？',
    thumbnail: '/src/assets/thumbnails/eat.jpg',
    category: '吃播',
    link: 'https://www.youtube.com/watch?v=LCR7ymQiNFE'
  },
  {
    title: '【VALORANT】今日でイモータルいけるんけ2',
    date: '2024-04-10',
    duration: '2:15:00',
    description: 'イモータルランクを目指す挑戦配信の第2弾！',
    thumbnail: '/src/assets/thumbnails/valorant_immortal2.jpg',
    category: '遊戲實況',
    link: 'https://www.youtube.com/watch?v=icAFsZAi7K4'
  },
  {
    title: '💧 桜の花びらたち / 紡木こかげ【歌ってみた】',
    date: '2025-03-19',
    duration: '05:18',
    description: 'AKB48的經典畢業曲《桜の花びらたち》翻唱，紀念出道一週年。',
    thumbnail: '/src/assets/thumbnails/SakuraNoHana.jpg',
    category: '歌回',
    link: 'https://www.youtube.com/watch?v=GEGkyKJTS6U'
  },
  {
    title: '💧 夢をかなえてドラえもん / 紡木こかげ【歌ってみた】',
    date: '2024-10-26',
    duration: '04:10',
    description: '翻唱動畫《哆啦A夢》主題曲，作為生日紀念作品。',
    thumbnail: '/src/assets/thumbnails/doreamon_cover.jpg',
    category: '歌回',
    link: 'https://www.youtube.com/watch?v=rlDoFSPNHZI'
  },
  {
    title: '💧 深海少女 / 紡木こかげ【歌ってみた】',
    date: '2025-05-03',
    duration: '03:35',
    description: '翻唱初音未來的經典Vocaloid歌曲《深海少女》，展現獨特的情感詮釋。',
    thumbnail: '/src/assets/thumbnails/shinkai_shoujo.jpg',
    category: '歌回',
    link: 'https://www.youtube.com/watch?v=4BiGlILqdBM'
  }
]


const filteredVideos = computed(() => {
  if (selectedCategory.value === '全部') {
    return videos
  }
  return videos.filter(video => video.category === selectedCategory.value)
})
</script>

<style scoped>
.movie {
  padding-top: 80px;
  background-color: #DEEBEC;
  min-height: 100vh;
}

.movie-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #042183;
}

.category-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #042183;
  border-radius: 25px;
  background: transparent;
  color: #042183;
  cursor: pointer;
  transition: all 0.3s;
}

.category-btn:hover {
  background: #042183;
  color: #fff;
}

.category-btn.active {
  background: #042183;
  color: #fff;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.movie-card {
  background-color: #F7F7F7;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.movie-card:hover {
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
  padding: 1.5rem;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #000;
}

.date {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.watch-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #D9D9D9;
  color: #042183;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.3s;
  border: none;
  cursor: pointer;
}

.watch-btn:hover {
  opacity: 0.8;
}

/* 電腦版樣式 */
@media (min-width: 1024px) {
  .movie-container {
    padding: 6rem 4rem;
  }

  .movie-grid {
    gap: 3rem;
  }

  .video-info h2 {
    font-size: 1.3rem;
  }
}

/* 平板版樣式 */
@media (min-width: 768px) and (max-width: 1023px) {
  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* 手機版樣式 */
@media (max-width: 767px) {
  .movie-container {
    padding: 3rem 1rem;
  }

  .movie-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .video-info h2 {
    font-size: 1rem;
  }
}
</style> 