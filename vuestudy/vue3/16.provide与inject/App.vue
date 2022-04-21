<template>
  <div class="app">
      <h3>我是App组件,{{name}}-----{{price}}</h3>
      <child/>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Child from './components/Child.vue'
import { provide } from '@vue/runtime-core'
export default {
  components: { Child },
  name:'App',
  setup(){
    let car = reactive({
      name:'宝马',
      price:'70w'
    })

    provide('car',car) // 给后代组件传递数据

    return {...toRefs(car)}
  }
}
</script>

<style>
.app{
  background-color: aqua;
  padding:10px;
}
</style>