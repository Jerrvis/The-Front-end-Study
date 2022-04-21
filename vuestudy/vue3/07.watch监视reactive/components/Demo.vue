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

    let ship = reactive({
      name:'Laffey',
      age:18,
      skill:{
        god:{
          level:1
        }
      }
    })

    // 监视多个数据()
    watch([sum,msg],(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
    },{immediate:true})

    // 监视reactive对象,监视对象无法获得正确的oldValue,只能获得newValue
    // 默认开启深度监视,无法关闭
    // watch(ship,(newValue,oldValue)=>{
    //   console.log('ship的值变化了',newValue,oldValue)
    // })

    // 监视reactive 中的某个属性
    // 此处的deep配置无效
    // watch(()=>ship.age,(newValue,oldValue)=>{
    //   console.log('ship.age的值变化了',newValue,oldValue)
    // })

    // 监视reactive 中的某些属性
    // watch([()=>ship.age,()=>ship.name,()=>ship.skill.god.level],(newValue,oldValue)=>{
    //   console.log('ship.age的值变化了',newValue,oldValue)
    // }) 

    // 监视reactive内部的某个对象属性
    watch(ship.skill,(newValue,oldValue)=>{
      console.log('ship的值变化了',newValue,oldValue)
    },{deep:true}) // 此处监视内部的属性 所以deep有效

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
