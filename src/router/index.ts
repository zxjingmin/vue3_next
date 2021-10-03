/*
 * @Author: 邵明
 * @Date: 2022-02-03 16:27:45
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-02-03 18:40:07
 */

import { createRouter, createWebHistory, Router } from 'vue-router';
import { Store } from 'vuex';

import BlankLayout from '@/views/layout/BlankLayout.vue';
import { RoutesDataItem } from './types';

const routes: RoutesDataItem[] = [
  {
    path: '/',
    title: 'Index',
    name: 'Index',
    component: BlankLayout,
  },
  {
    path: '/login',
    title: 'Login',
    name: 'Login',
    meta: {
      requiresAuth: false,
    },
    component: () => import('@/views/login/login.vue'),
  },
];

export default (): Router => {
  const router = createRouter({
    history: createWebHistory('/'),
    routes: routes as any,
  });
  router.beforeEach(async (to, from, next) => {
    // let isAuthenticated: boolean = store.getters['user/isAuthenticated'];
    // const user: UserType | undefined = store.getters['user/userInfo'];
    // const token: TokenType | undefined = store.getters['user/token'];
    // const endTime = new Date().getTime() - 5 * 60 * 1000;
    // if (isAuthenticated && token?.expires) {
    //   if (!user?.user || token?.expires < endTime) {
    //     isAuthenticated = await store.dispatch('user/refresh');
    //   }
    // }
    // if (!to.meta.requiresAuth && isAuthenticated) {
    //   return next({ name: 'Status' });
    // } else if (to.meta.requiresAuth && !isAuthenticated) {
    //   return next({ name: 'Login' });
    // }
    return next();
  });

  return router;
};
