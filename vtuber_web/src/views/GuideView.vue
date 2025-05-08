<template>
  <div class="guide">
    <div class="guide-container">
      <h1>Fan Guide</h1>

      <div class="guide-sections">
        <section class="guide-section">
          <h2>基本規則</h2>
          <div class="rule-list">
            <div v-for="(rule, index) in basicRules" :key="index" class="rule-item">
              <span class="rule-number">{{ index + 1 }}</span>
              <p>{{ rule }}</p>
            </div>
          </div>
        </section>

        <section class="guide-section">
          <h2>聊天室規則</h2>
          <div class="rule-list">
            <div v-for="(rule, index) in chatRules" :key="index" class="rule-item">
              <span class="rule-number">{{ index + 1 }}</span>
              <p>{{ rule }}</p>
            </div>
          </div>
        </section>

        <section class="guide-section">
          <h2>常見問題</h2>
          <div class="faq-list">
            <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
              <div class="faq-question" @click="toggleFaq(index)">
                <h3>{{ faq.question }}</h3>
              </div>
              <div class="faq-answer" :class="{ 'open': faq.isOpen }">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="guide-section">
          <h2>支持方式</h2>
          <div class="support-options">
            <div v-for="(option, index) in supportOptions" :key="index" class="support-item">
              <img :src="option.image" :alt="option.title" class="support-icon">
              <h3>{{ option.title }}</h3>
              <p>{{ option.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const basicRules = [
  '請尊重VTuber和其他觀眾',
  '禁止發表歧視性、攻擊性或騷擾性言論',
  '禁止在聊天室中討論其他VTuber的負面話題',
  '禁止在聊天室中發布廣告或垃圾訊息',
  '禁止在聊天室中討論政治或敏感話題'
]

const chatRules = [
  '請使用適當的語言和表情符號',
  '避免過度刷屏或重複發送相同訊息',
  '尊重其他觀眾的發言權',
  '不要在聊天室中討論個人隱私',
  '遵守直播間的特定規則'
]

const faqs = ref([
  {
    question: '如何成為會員？',
    answer: '您可以在直播間點擊會員按鈕，選擇適合您的會員等級進行訂閱。會員可以獲得專屬徽章、表情符號等特權。',
    isOpen: false
  },
  {
    question: '如何參與直播互動？',
    answer: '您可以在聊天室中發送訊息與VTuber互動。請注意遵守聊天室規則，保持友善的交流氛圍。',
    isOpen: false
  },
  {
    question: '如何購買周邊商品？',
    answer: '您可以在官方商店頁面瀏覽並購買周邊商品。支持多種支付方式，包括信用卡和電子支付。',
    isOpen: false
  }
])

const supportOptions = [
  {
    title: '會員訂閱',
    description: '成為會員可以獲得專屬徽章、表情符號等特權，並支持VTuber的創作活動。',
    image: '/src/assets/support/subscribe.png'
  },
  {
    title: '購買周邊',
    description: '購買官方周邊商品，支持VTuber的創作活動，同時獲得精美的周邊商品。',
    image: '/src/assets/support/buy.png'
  },
  {
    title: '分享推廣',
    description: '在社交媒體上分享VTuber的內容，幫助更多人認識和了解VTuber。',
    image: '/src/assets/support/share.png'
  }
]

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<style>
/* 全局樣式 */
.fa-star,
.fa-comments,
.fa-question-circle,
.fa-heart {
  color: #042183;
  margin-right: 0.5rem;
}
</style>

<style scoped>
.guide {
  padding-top: 80px;
  background-color: #DEEBEC;
  min-height: 100vh;
  color: #000;
}

.guide-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #042183;
}

.guide-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.guide-section {
  background-color: #F7F7F7;
  border-radius: 10px;
  padding: 2rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #042183;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rule-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rule-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.rule-number {
  background: #042183;
  color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  overflow: hidden;
}

.faq-question {
  padding: 1rem;
  background: #F7F7F7;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.1rem;
  margin: 0;
  color: #000;
}

.faq-answer {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #fff;
}

.faq-answer.open {
  padding: 1rem;
  max-height: 500px;
}

.faq-answer p {
  color: #888;
  line-height: 1.6;
}

.support-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.support-item {
  text-align: center;
  padding: 1.5rem;
  background: #F7F7F7;
  border-radius: 10px;
  transition: transform 0.3s;
}

.support-item:hover {
  transform: translateY(-5px);
}

.support-item i {
  font-size: 2rem;
  color: #042183;
  margin-bottom: 1rem;
}

.support-item h3 {
  color: #000;
  margin-bottom: 0.5rem;
}

.support-item p {
  color: #888;
  line-height: 1.6;
}

.support-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .guide-container {
    padding: 1rem;
  }

  .support-options {
    grid-template-columns: 1fr;
  }
}
</style> 