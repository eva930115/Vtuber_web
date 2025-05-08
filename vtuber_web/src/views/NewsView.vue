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
