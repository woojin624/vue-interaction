import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/reset.css';
import router from './router.js';

createApp(App)
  .use(router)
  .mount('#app');
