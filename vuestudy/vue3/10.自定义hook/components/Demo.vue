<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <br>
  <h2>当前点击时的鼠标的坐标为：x:{{point.x}}  y:{{point.y}}</h2>
</template>

<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',


  setup(){
    console.log('---setup---')
    let sum = ref(0)

    let point = usePoint()
  
    return {
      sum,
      point
    }
  }
}
</script>

<style scoped>
</style>
