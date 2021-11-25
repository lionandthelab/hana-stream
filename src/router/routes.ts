import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Admin.vue') }],
  },
  {
    path: '/list/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/list/:id', component: () => import('pages/List.vue') ,props:true, name:'list'}],
  },
  {
    path: '/watch/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/watch/:id', component: () => import('pages/Watch.vue') ,props:true, name:'list'}],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
