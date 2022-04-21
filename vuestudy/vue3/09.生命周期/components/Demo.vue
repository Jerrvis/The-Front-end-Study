<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {ref,
onBeforeMount,
onMounted,
onBeforeUnmount,
onUnmounted,
onBeforeUpdate,
onUpdated} from 'vue'
export default {
  name: 'Demo',


  setup(){
    console.log('---setup---')
    let sum = ref(0)

    // 通过组合式API写生命周期钩子
    onBeforeMount(()=>{
      console.log('---onBeforeMount---')
    })
    onMounted(()=>{
      console.log('---onMounted---')
    })
    onBeforeUpdate(()=>{
      console.log('---onBoreUpdate---')
    })
    onUpdated(()=>{
      console.log('---onUpdated---')
    })
    onBeforeUnmount(()=> {
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(()=>{
      console.log('---onUnmounted---')
    })
  
    return {
      sum
    }
  }

  // 生命周期
  // beforeCreate() {
  //   console.log('---beforeCreate---')
  // },
  // created(){
  //   console.log('---created---')
  // },
  // beforeMount(){
  //   console.log('---beforeMount---')
  // },
  // mounted(){
  //   console.log('---mounted---')
  // },
  // beforeUpdate(){
  //   console.log('---beforeUpdate---')
  // },
  // updated(){
  //   console.log('---updated---')
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnmount---')
  // },
  // unmounted(){
  //   console.log('---unmounted---')
  // }
}
</script>

<style scoped>
</style>
