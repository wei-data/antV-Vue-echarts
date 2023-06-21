import Vue from 'vue'
import VueRouter from 'vue-router'
// import LogIn from '@/views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/LogIn'
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: () => import('@/views/LogIn.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path: '',
        redirect: 'Home'
      },
      {
        path: 'Home',
        name: 'Home',
        meta: {
          module: '首页'
        },
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: 'ProManagement',
        name: 'ProManagement',
        meta: {
          module: '商品管理'
        },
        component: () => import('@/views/Pro/ProManagement.vue')
      },
      {
        path: 'OrderManagement',
        name: 'OrderManagement',
        meta: {
          module: '订单管理'
        },
        component: () => import('@/views/Order/OrderManagement.vue')
      },
      {
        path: 'AfterSale',
        name: 'AfterSale',
        meta: {
          module: '订单管理'
        },
        component: () => import('@/views/Order/AfterSale.vue')
      },
      {
        path: 'DataStatistics',
        name: 'DataStatistics',
        meta: {
          module: '数据统计'
        },
        component: () => import('@/views/DataStatistics/DataStatistics.vue')
      },
      {
        path: 'EvaluatePage',
        name: 'EvaluatePage',
        meta: {
          module: '评价管理'
        },
        component: () => import('@/views/evaluate/EvaluatePage.vue')
      },
      {
        path: 'platformPage',
        name: 'platformPage',
        meta: {
          module: '平台管理'
        },
        component: () => import('@/views/platform/platformPage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
