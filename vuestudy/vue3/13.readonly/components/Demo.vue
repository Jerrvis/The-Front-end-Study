<template>
  <h4>当前的x值是：{{sum}}</h4>
  <button @click="sum++">点我x++</button>
  <h1>对象：{{ship}}</h1>
  <h2>名字：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>技能：{{skill.god.level}}</h3>
  <button @click="name+='~'">修改信息</button>
  <button @click="age++">修改信息</button>
  <button @click="skill.god.level++">升级技能</button>

</template>

<script>
import {reactive,toRefs,ref,readonly, shallowReadonly} from 'vue'
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

    // readonly使得对象所有的属性都不能被修改
    // shallowReadonly使得对象所有的第一层属性都不能被修改
    ship = shallowReadonly(ship)
    sum = shallowReadonly(sum)

    let sum = ref(0)

    return {
      ...toRefs(ship),
      sum
    }
  }
}
</script>

<style scoped>

</style>
