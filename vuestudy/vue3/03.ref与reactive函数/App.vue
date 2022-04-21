<template>
<h1>舰娘信息</h1>
<h2>名字：{{ship.name}}</h2>
<h2>年龄：{{ship.age}}</h2>
<h2 v-show="ship.sex">性别：{{ship.sex}}</h2>
<h3>舰娘种类：{{ship.type}}</h3>
<h3>舰娘等级：{{ship.level}}</h3>
<h3>萌点：{{ship.point}}</h3>
<button @click="changeInfo">修改数据</button>

<button @click="addSex">添加性别</button>
<button @click="deleteSex">添加性别</button>

</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',

  // 此处只是测试以下setup
  setup(){
    // 响应式定义数据
    // let name = ref('Laffey')
    // let age = ref(18)
    // let ship = reactive({
    //   type:'驱逐',
    //   level:80
    // })

    let ship = reactive({
      name:'Laffey',
      age:18,
      type:'驱逐',
      level:50,
      point:['兔耳', '白丝', '白毛']
    })


    function changeInfo(){
      ship.level = 90
      ship.age = 17
      ship.type = '导驱'
      console.log(ship.type)
      ship.point[0] = '双马尾'
    }

    function addSex(){
      ship.sex = 'girl'
    }

    function deleteSex(){
      delete ship.sex
    }


    // 返回一个对象
    return {
      ship,
      changeInfo,
      addSex,
      deleteSex
    }

    // 返回一个函数（渲染函数）
    // return ()=>h('h1','B13')
  }  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
