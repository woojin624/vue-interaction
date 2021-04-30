import { createWebHistory, createRouter } from 'vue-router';
import Kf from './components/kf/Kf.vue';
import Niniz from './components/niniz/Niniz.vue';
import Home from './components/home/Home.vue';

const routes = [
  {
    path: '/kakaofriends',
    component: Kf,
  },
  {
    path: '/niniz',
    component: Niniz,
  },
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
