import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './pages/MainPage.vue'

import './style.css'

const router = createRouter({
  routes: [{
    path: '/',
    component: MainPage
  }],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')