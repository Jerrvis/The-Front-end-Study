<template>
  <h4>当前的x值是：{{sum}}</h4>
  <button @click="sum++">点我x++</button>
  <h1>对象：{{ship}}</h1>
  <h2>名字：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>技能：{{skill.god.level}}</h3>
  <h3>装备：{{fan}}</h3>
  <button @click="name+='~'">修改信息</button>
  <button @click="age++">修改信息</button>
  <button @click="skill.god.level++">升级技能</button>
  <button @click="rawShip">输出最原始的ship</button>
  <button @click="addFan">给舰娘添加一个饭盒</button>

</template>

<script>
import {reactive,toRefs,ref,toRaw, markRaw} from 'vue'
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

    // markRaw 使得对象无法变成响应式，但数据会被修改
    function addFan(){
      let fan = {f:1}
      ship.fan = markRaw(fan)
    }

    let sum = ref(0)

    function rawShip(){
      const s = toRaw(ship)
      console.log('输出最原始ship', s)
    }

    return {
      ship,
      ...toRefs(ship),
      sum,
      rawShip,
      addFan
    }
  }
}
</script>

<style scoped>

</style>
