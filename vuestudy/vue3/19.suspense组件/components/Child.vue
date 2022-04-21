<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <h3>{{sum}}</h3>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name:'Child',
  // setup(){
  //   let sum = ref(0)
  //   // 强行child 渲染够一秒
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve({sum})
  //     },1000)
  //   })
  // }
  async setup(){
    let sum = ref(0)
    // 强行child 渲染够一秒
    let p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },1000)
    })
    return await p
  }
}
</script>

<style>
.child{
  background-color: orange;
  padding:10px;
}
</style>