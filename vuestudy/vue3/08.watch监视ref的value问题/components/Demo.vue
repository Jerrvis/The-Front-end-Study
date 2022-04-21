<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <br>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>名字：{{ship.name}}</h2>
  <h2>年龄：{{ship.age}}</h2>
  <h3>技能：{{ship.skill.god.level}}</h3>
  <button @click="ship.name+='~'">修改信息</button>
  <button @click="ship.age++">修改信息</button>
  <button @click="ship.skill.god.level++">升级技能</button>
</template>

<script>
import {ref, watch, reactive} from 'vue'
export default {
  name: 'Demo',


  setup(){
    let sum = ref(0)
    let msg = ref('拉菲')

    let ship = ref({
      name:'Laffey',
      age:18,
      skill:{
        god:{
          level:1
        }
      }
    })

    // 监视基本类型
    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
    })

    // 监视ref生成的对象，方法一
    watch(ship,(newValue,oldValue)=>{
      console.log('ship的值变化了',newValue,oldValue)
    },{deep:true})
    
    // 监视ref生成的对象，方法二
    // watch(ship.value,(newValue,oldValue)=>{
    //   console.log('ship的值变化了',newValue,oldValue)
    // })

    return {
      sum,
      msg,
      ship
    }
  }
}
</script>

<style scoped>

</style>
