// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router"

import About from '../pages/About'
import Home from '../pages/Home'

import Messages from '../pages/Messages'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建一个路由器
const router =  new VueRouter({
  mode:'history',
  routes: [
    { 
      name:'guanyu',
      path:'/about',  // 一级路由
      component:About,
      meta:{
        title:'guanyu'
      }
    },
    {
      name:'port',
      path:'/home',  // 一级路由
      component:Home,
      meta:{
        title:'gangqu'
      },
      // 独享全局路由守卫
      // beforeEnter:(to,from,next)=>{
      //   if(localStorage.getItem('ship') === 'Laffey'){
      //     next() //判断特定身份是否有进入特定区域的权限
      //   }
      // },
      children:[
        {
          name:'xinwen',
          path:'news',  // 二级路由不要写斜杠
          component:News,
          meta:{
            needAuth:true // 权限校验
          }
        },
        {
          name:'xinxi',
          path:'messages',  // 二级路由不要写斜杠
          component:Messages,
          meta:{
            needAuth:true // 权限校验
          },
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

// 全局前置路由守卫
// 初始化与每一次路由切换之前调用一次函数
// router.beforeEach((to,from,next)=>{
//   if(to.meta.needAuth){
//     if(localStorage.getItem('ship') === 'Laffey'){
//       next() //判断特定身份是否有进入特定区域的权限
//     }else{
//       alert("抱歉你没有权限进入")
//     }
//   }else{
//     next()
//   }
// })

// 全局后置路由守卫
// 初始化与每一次路由切换之后调用一次函数
// router.afterEach((to,from)=>{
//   // console.log('后置路由守卫',to,from)
//   document.title = to.meta.title || '港区'// 修改页签名字
// })

export default router