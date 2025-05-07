<template>
  <div class="contact">
    <div class="contact-container">
      <h1>Contact</h1>

      <div class="contact-content">
        <section class="contact-form-section">
          <h2><i class="fas fa-envelope"></i> 聯絡表單</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">姓名</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                placeholder="請輸入您的姓名"
              >
            </div>

            <div class="form-group">
              <label for="email">電子郵件</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                placeholder="請輸入您的電子郵件"
              >
            </div>

            <div class="form-group">
              <label for="subject">主旨</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required
                placeholder="請輸入主旨"
              >
            </div>

            <div class="form-group">
              <label for="message">訊息內容</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                placeholder="請輸入您的訊息"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">
              <i class="fas fa-paper-plane"></i> 發送訊息
            </button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // 這裡可以添加表單提交邏輯
  console.log('表單提交:', form.value)
  // 重置表單
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact {
  padding-top: 100px;
  min-height: 100vh;
  background-color: #DEEBEC;
  color: #000;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #042183;
}

.contact-content {
  display: flex;
  justify-content: center;
}

.contact-form-section {
  width: 100%;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #ff69b4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-form {
  background-color: #F7F7F7;
  padding: 2rem;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #042183;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #D9D9D9;
  color: #042183;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.3s;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.submit-btn:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }
}
</style> 