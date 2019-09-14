import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Router/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/social',
      name: 'Social',
      component: () => import(/* webpackChunkName: "Social" */ '@/components/Router/Social'),
    },
    {
      path: '/verify',
      name: 'Verify',
      component: () => import(/* webpackChunkName: "Verify" */ '@/components/Router/Verify'),
    },
    {
      path: '/password',
      name: 'Password',
      component: () => import(/* webpackChunkName: "Password" */ '@/components/Router/Password'),
    },
    {
      path: '*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "NotFound" */ '@/components/Router/NotFound'),
    },
  ],
});
