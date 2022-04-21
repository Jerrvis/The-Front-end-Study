<template>
  <h4>当前的x值是：{{x.y}}</h4>
  <button @click="x++">点我x++</button>
  <h1>对象：{{ship}}</h1>
  <h2>名字：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>技能：{{skill.god.level}}</h3>
  <button @click="name+='~'">修改信息</button>
  <button @click="age++">修改信息</button>
  <button @click="skill.god.level++">升级技能</button>

</template>

<script>
import {reactive,toRef,toRefs,shallowReactive,shallowRef,ref} from 'vue'
export default {
  name: 'Demo',


  setup(){
    // shallowReactive 只能对第一层做响应式
    // let ship = shallowReactive()
    let ship = reactive({
      name:'Laffey',
      age:18,
      skill:{
        god:{
          level:1
        }
      }
    })

    // shallowRef无法处理对象数据类型，只能处理基本数据类型
    let x  = shallowRef({
      y:0,
      z:0
    })

    return {
      ship,
      ...toRefs(ship),
      x
    }
  }
}
</script>

<style scoped>

</style>
