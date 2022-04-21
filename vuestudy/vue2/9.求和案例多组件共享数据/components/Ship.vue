<template>
  <div>
    <h1>舰娘列表</h1>
    <h3>Count组件求和为{{sum}}</h3>
    <input v-model="name" type="text" placeholder="请输入名字">
    <button @click="add">添加</button>
    <ul>
      <li v-for="s in $store.state.shipList" :key="s.id">{{s.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
  name:'Ship',
  data(){
    return {
      name:''
    }
  },
  methods: {
    add(){
      const shipObj = {id:nanoid(),name:this.name}
      console.log(shipObj)
      this.$store.commit('ADD_SHIP',shipObj)
      this.name = ''
    }
  },
  computed:{
    ...mapState(['shipList']),
    sum(){
      return this.$store.state.sum
    }
  }
}
</script>

<style>

</style>