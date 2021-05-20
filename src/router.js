import { createWebHistory, createRouter } from 'vue-router';
import Section1Main from './components/section1/Main.vue';
import Section1Parallax from './components/section1/Parallax.vue';
import Slide1 from './components/section1/Slide1.vue';
import Section2Main from './components/section2/Main.vue';
import Home from './components/home/Home.vue';

const routes = [
  {
    path: '/section1',
    component: Section1Main,
    children: [
      { path: '', component: Section1Parallax },
      { path: 'slide1', component: Slide1 },
    ],
  },
  {
    path: '/section2',
    component: Section2Main,
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
