<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: 'App',

  setup(){

    // 自定义一个ref
    function myRef(value){
      let timer
      return customRef((track,trigger)=>{
        return {
          get(){
            console.log("myRef中数据被读取了")
            track() // 追踪数据变化
            return value
          },
          set(newValue){
            console.log("myRef中数据被修改了")
            clearTimeout(timer)
            setTimeout(()=>{
              value = newValue
              trigger()
            },2000) // 通知Vue解析模板
          }
        }
      })
    }

    let keyWord = myRef('Hello')

    return {
      keyWord
    }
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
