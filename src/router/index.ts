import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import Layout from '@/Layout/index.vue';
import Home from '@/pages/Home/index.vue';
import Write from '@/pages/Write/index.vue';
const Login = () => import('@/pages/Login/index.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [{ path: '', name: 'Home', component: Home }]
  },
  {
    path: '/write',
    name: 'Write',
    component: Layout,
    children: [{ path: '', name: 'Write', component: Write }]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: (to) => {
      return { path: '/' };
    }
  }
];
export default createRouter({
  history: createWebHashHistory(),
  routes
});
