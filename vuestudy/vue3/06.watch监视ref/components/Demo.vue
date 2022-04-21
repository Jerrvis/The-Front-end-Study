<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <br>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
</template>

<script>
import {ref, watch} from 'vue'
export default {
  name: 'Demo',

  // vue2 监视模式
  // watch:{
  //   sum:{
  //     immediate:ture,
  //     deep:true, // 深度监视
  //     handler(newValue,oldValue){
  //       console.log(newValue,oldValue)
  //     }
  //   }
  // },

  setup(){
    let sum = ref(0)
    let msg = ref('拉菲')

    // ref监视
    // watch(sum,(newValue,oldValue)=>{
    // console.log('sum的值变化了',newValue,oldValue)
    // })

    // 监视多个数据()
    watch([sum,msg],(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
    },{immediate:true})


    return {
      sum,
      msg
    }
  }
}
</script>

<style scoped>

</style>
