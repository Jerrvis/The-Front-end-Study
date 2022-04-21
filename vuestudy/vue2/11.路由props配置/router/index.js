// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router"

import About from '../pages/About'
import Home from '../pages/Home'

import Messages from '../pages/Messages'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建一个路由器
export default new VueRouter({
  routes: [
    { 
      name:'guanyu',
      path:'/about',  // 一级路由
      component:About
    },
    {
      name:'jia',
      path:'/home',  // 一级路由
      component:Home,
      children:[
        {
          name:'xinwen',
          path:'news',  // 二级路由不要写斜杠
          component:News
        },
        {
          name:'xinxi',
          path:'messages',  // 二级路由不要写斜杠
          component:Messages,
          children:[
            {
              name:'jianniang',
              path:'detail',
              component:Detail,
              // props 对象的第一种写法 对象写法
              // 该对象的所有key-value都会以props的形式传给组件
              // props:{a:1,b:2}

              // props 对象的第二种写法 若布尔值为真，
              // 就会把该路由收到的所有params参数以props形式传给组件
              // props:true

              // props 对象的第三种写法 
              props($route){
                return {id:$route.query.id,title:$route.query.title}
              }
            }
          ]
        }
      ]
    }
  ]
})