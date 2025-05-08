<template>
  <div class="shop">
    <div class="shop-container">
      <h1>Shop</h1>
      
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

      <div class="products-grid">
        <article v-for="(product, index) in filteredProducts" :key="index" class="product-card">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
            <div v-if="product.isNew" class="new-badge">新品</div>
            <div v-if="product.isSoldOut" class="sold-out-badge">售罄</div>
          </div>
          <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p class="price">¥{{ product.price.toLocaleString() }}</p>
            <p class="description">{{ product.description }}</p>
            <button 
              class="buy-btn" 
              :disabled="product.isSoldOut"
              @click="addToCart(product)"
            >
              {{ product.isSoldOut ? '已售罄' : '加入購物車' }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['全部', '服飾', '周邊', '數位商品']
const selectedCategory = ref('全部')

const products = [
  {
    name: 'アクリルキーホルダー',
    price: 1000,
    description: '紡木こかげ原創設計的壓克力吊飾，輕巧可愛，適合掛在包包或鑰匙上。',
    image: '/src/assets/products/AcrylicKeychain.jpg',
    category: '周邊',
    isNew: true,
    isSoldOut: false
  },
  {
    name: 'ジャージ',
    price: 7500,
    description: '紡木こかげ主題運動風夾克，舒適材質與時尚設計，適合日常穿搭。',
    image: '/src/assets/products/Jersey.jpg',
    category: '服飾',
    isNew: false,
    isSoldOut: false
  },
  {
    name: '衣装メタルキーホルダー',
    price: 1500,
    description: '以紡木こかげ的代表衣裝為造型的金屬鑰匙圈，質感滿分。',
    image: '/src/assets/products/Keychain.jpg',
    category: '周邊',
    isNew: true,
    isSoldOut: false
  },
  {
    name: 'ミニアクリルブロック',
    price: 1000,
    description: '以紡木こかげ的代表衣裝為造型的小壓克力立牌，質感滿分。',
    image: '/src/assets/products/Keychain2.jpg',
    category: '周邊',
    isNew: true,
    isSoldOut: false
  },
  {
    name: 'GEAR ゲーミングキーボード',
    price: 500,
    description: '由紡木こかげ錄製的聖誕節語音，時常約1分55秒。',
    image: '/src/assets/products/keyboard.jpg',
    category: '數位商品',
    isNew: true,
    isSoldOut: false
  },
  {
    name: '学園ボイス2025',
    price: 700,
    description: '由紡木こかげ錄製的校園語音，時常約1分55秒。',
    image: '/src/assets/products/SchoolVoice2025.jpg',
    category: '數位商品',
    isNew: true,
    isSoldOut: false
  }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === '全部') {
    return products
  }
  return products.filter(product => product.category === selectedCategory.value)
})

const addToCart = (product) => {
  // 這裡可以添加購物車功能
  console.log('加入購物車:', product.name)
}
</script>

<style>
/* 全局樣式 */
.fa-shopping-cart {
  color: #042183;
}
</style>

<style scoped>
.shop {
  padding-top: 80px;
  background-color: #DEEBEC;
  min-height: 100vh;
}

.shop-container {
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

.products-grid {
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

.sold-out-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #888;
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-info {
  padding: 1rem;
}

.product-info h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #042183;
}

.price {
  color: #ff69b4;
  font-weight: bold;
}

.description {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.buy-btn {
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
  width: 100%;
  justify-content: center;
}

.buy-btn:hover:not(:disabled) {
  opacity: 0.8;
}

.buy-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 電腦版樣式 */
@media (min-width: 1024px) {
  .shop-container {
    padding: 6rem 4rem;
  }

  .product-grid {
    gap: 3rem;
  }

  .product-info h3 {
    font-size: 1.3rem;
  }
}

/* 平板版樣式 */
@media (min-width: 768px) and (max-width: 1023px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* 手機版樣式 */
@media (max-width: 767px) {
  .shop-container {
    padding: 3rem 1rem;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .product-info h3 {
    font-size: 1rem;
  }
}
</style> 