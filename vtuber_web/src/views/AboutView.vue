<template>
  <div class="about">
    <div class="about-container">
      <div class="profile-section">
        <div class="profile-image">
          <img src="@/assets/profile1.png" alt="VTuber Profile" />
        </div>
        
        <div class="profile-info">
          <h1>紡木こかげ</h1>
          <p class="subtitle">ぶいすぽっ！所属、紡木こかげです📘💧 </p>
          <p class="subtitle">FPSと食べ物が大好き！</p>
          
          <div class="stats">
            <div class="stat-item">
              <span class="stat-value">379K+</span>
              <span class="stat-label">Subscribers</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">400+</span>
              <span class="stat-label">Videos</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">1M+</span>
              <span class="stat-label">Views</span>
            </div>
          </div>
        </div>
      </div>

      <div class="about-content">
        <section class="about-section">
          <h2>About Me</h2>
          <p>素直で涙もろい女の子。 FPSだけは飽きずに続けられたという無類のゲーム好き。</p>
          <p>食べることも大好きで、アニメを見ながらご飯を食べている時間が人生で一番幸せらしい。</p>
        </section>

        <section class="about-section">
          <h2>配信内容</h2>
          <ul class="content-list">
            <li>ゲーム実況</li>
            <li>歌配信</li>
            <li>雑談配信</li>
            <li>コラボ配信</li>
            <li>イベント配信</li>
          </ul>
        </section>

        <section class="about-section">
          <h2>活動時間</h2>
          <div class="schedule">
            <div class="schedule-item">
              <span class="day">平日</span>
              <span class="time">20:00 - 22:00</span>
            </div>
            <div class="schedule-item">
              <span class="day">週末</span>
              <span class="time">15:00 - 18:00</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding-top: 80px;
  background-color: #DEEBEC;
  min-height: 100vh;
}

.about-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.profile-section {
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.profile-image {
  flex: 0 0 300px;
}

.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.profile-info {
  flex: 1;
}

.profile-info h1 {
  font-size: 2.5rem;
  color: #042183;
  margin-bottom: 1rem;
}

.profile-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-links a {
  color: #042183;
  font-size: 1.5rem;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 0.8;
}

/* 電腦版樣式 */
@media (min-width: 1024px) {
  .about-container {
    padding: 6rem 4rem;
  }

  .profile-section {
    gap: 6rem;
  }

  .profile-image {
    flex: 0 0 400px;
  }

  .profile-info h1 {
    font-size: 3rem;
  }

  .profile-info p {
    font-size: 1.2rem;
  }
}

/* 平板版樣式 */
@media (min-width: 768px) and (max-width: 1023px) {
  .profile-section {
    gap: 3rem;
  }

  .profile-image {
    flex: 0 0 250px;
  }
}

/* 手機版樣式 */
@media (max-width: 767px) {
  .about-container {
    padding: 3rem 1rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .profile-image {
    flex: none;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .profile-info h1 {
    font-size: 2rem;
  }

  .social-links {
    justify-content: center;
  }
}

.stats {
  display: flex;
  gap: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #042183;
}

.stat-label {
  color: #888;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-section {
  background-color: #F7F7F7;
  padding: 2rem;
  border-radius: 10px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #042183;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #888;
}

.content-list {
  list-style-type: none;
  padding: 0;
}

.content-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #D9D9D9;
  color: #888;
}

.content-list li:last-child {
  border-bottom: none;
}

.schedule {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
}

.schedule-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: bold;
  color: #ff69b4;
}
</style> 