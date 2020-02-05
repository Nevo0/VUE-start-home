import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../views/Search.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
