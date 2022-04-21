<template>
<h1>舰娘信息</h1>
<h2>名字：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>性别：{{sex}}</h2>
<button @click="sayHello">Hello</button>
<br>
<button @click="sayFriend">Friend</button>
</template>

<script>
import {h} from 'vue'

export default {
  name: 'App',

  data() {
    return {
      sex:'女'
    }
  },
  methods:{
    sayFriend(){
      alert('新泽西,翔鹤')
    }
  },

  // 此处只是测试以下setup
  setup(){
    let name = 'Laffey'
    let age = 18

    function sayHello(){
      alert(`指挥官你好，我叫${name}`)
    }

    // 返回一个对象
    return {
      name,
      age,
      sayHello
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
