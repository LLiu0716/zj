import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    redirect: '/documentation/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Documentation',
        component: () =>
          import(/* webpackChunkName: "documentation" */ '@/views/documentation/index.vue'),
        meta: {
          title: 'Documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/index.vue'),
        meta: {
          title: 'Guide',
          activeMenu: '/documentation/index',
          icon: 'guide'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    meta: {
      title: 'System',
      alwaysShow: true,
      icon: 'lock'
    },
    children: [
      {
        path: 'menu',
        name: 'Menu Management',
        component: () => import(/* webpackChunkName: "menu" */ '@/views/system/menu.vue'),
        meta: {
          title: 'Menu Management',
          hidden: false,
          icon: 'list'
        }
      },
      {
        path: 'role',
        name: 'Role Management',
        component: () => import(/* webpackChunkName: "role" */ '@/views/system/role.vue'),
        meta: {
          title: 'Role Management',
          hidden: false,
          icon: 'list'
        }
      },
      {
        path: 'user',
        name: 'User Management',
        component: () => import(/* webpackChunkName: "user" */ '@/views/system/user.vue'),
        meta: {
          title: 'User Management',
          icon: 'list'
        }
      }
    ]
  },
  {
    // 外链路由
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.ikea.cn',
        redirect: '/',
        meta: {
          title: 'External Link',
          icon: 'link'
        }
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "AboutView" */ '@/views/AboutView.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/err',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/error/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "error" */ '@/views/error/index.vue'),
    meta: {
      hidden: true
    }
  }
]
