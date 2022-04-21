<template>
  <h1>舰娘信息</h1>
  <h2>名字：{{ship.name}}</h2>
  <h2>年龄：{{ship.age}}</h2>
  <button @click="test">测试Hello触发</button>
  <slot name="azurlane"></slot>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'Demo',
  props:['name','age'],
  emits:['hello'], // 绑定hello 事件

  setup(props,context){
    let ship = reactive({
      name:'Laffey',
      age:18
    })

    function test(){
      context.emit("hello",666) // 触发hello
    }
    
    return {
      ship,
      test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
