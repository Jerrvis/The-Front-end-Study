// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router"

import About from '../pages/About'
import Home from '../pages/Home'

import Messages from '../pages/Messages'
import News from '../pages/News'

// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path:'/about',  // 一级路由
      component:About
    },
    {
      path:'/home',  // 一级路由
      component:Home,
      children:[
        {
          path:'news',  // 二级路由不要写斜杠
          component:News
        },
        {
          path:'messages',  // 二级路由不要写斜杠
          component:Messages
        }
      ]
    }
  ]
})