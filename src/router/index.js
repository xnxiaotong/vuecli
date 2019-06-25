import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: '/',
    component: resolve => require(['@/components/home'], resolve),
    redirect: "info",
    children: [{
      path: 'info',
      name: 'info',
      meta: {
        keepAlive: false,
        title: "商城"
      },
      component: resolve => require(['@/components/main/info'], resolve)
    },
    {
      path: 'classs',
      name: 'classs',
      meta: {
        keepAlive: false,
        title: "分类"
      },
      component: resolve => require(['@/components/main/classs'], resolve),
    },
    {
      path: 'shoes',
      name: 'shoes',
      component: resolve => require(['@/components/main/shoes'], resolve),
      meta: {
        title: "球鞋"
      }
    },
    {
      path: 'carts',
      name: 'carts',
      component: resolve => require(['@/components/main/carts'], resolve),
      meta: {
        title: "购物车"
      }
    },
    {
      path: 'my',
      name: 'my',
      component: resolve => require(['@/components/main/my'], resolve),
      meta: {
        title: "我的"
      }
    },

    ]
  }]
})



export default router;
