<template>
  <h1>对象：{{ship}}</h1>
  <h2>名字：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>技能：{{skill.god.level}}</h3>
  <button @click="name+='~'">修改信息</button>
  <button @click="age++">修改信息</button>
  <button @click="skill.god.level++">升级技能</button>
</template>

<script>
import {reactive,toRef,toRefs} from 'vue'
export default {
  name: 'Demo',


  setup(){

    let ship = reactive({
      name:'Laffey',
      age:18,
      skill:{
        god:{
          level:1
        }
      }
    })

    return {
      // toRef引用
      ship,
      // name:toRef(ship,'name'),
      // age:toRef(ship,'age'),
      // level:toRef(ship.skill.god,'level'),
      
      // toRefs只能单层
      ...toRefs(ship)
    }
  }
}
</script>

<style scoped>

</style>
