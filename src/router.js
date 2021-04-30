import { createWebHistory, createRouter } from 'vue-router';
import Kf from './components/kf/Kf.vue';
import KfHome from './components/kf/KfHome.vue';
import Niniz from './components/niniz/Niniz.vue';
import Home from './components/home/Home.vue';
import Ryan from './components/kf/Ryan.vue';

const routes = [
  {
    path: '/kakaofriends',
    component: Kf,
    children: [
      { path: '', component: KfHome },
      { path: 'ryan', component: Ryan },
    ],
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
