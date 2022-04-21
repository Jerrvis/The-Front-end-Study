<template>
  <div class="count">
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和乘10为：{{bigSum}}</h3>
    <h3>我在{{map}}捞{{ship}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name: "Count",
  props: ["title"],
  data(){
    return{
      n:1
    }
  },
  computed:{
    // 程序员自己写属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // map(){
    //   return this.$store.state.map
    // },
    // ship(){
    //   return this.$store.state.ship
    // },
    
    /** 借助mapState解构生成计算属性（对象写法）
     * ...mapState({sum:'sum',map:'map',ship:'ship'}),*/

    // 借助mapState解构生成计算属性（数组写法）
    // 注意生成属性名 与 mapState名字要相同
    ...mapState(['sum','map','ship']),

    // bigSum(){
    //   return this.$store.getters.bigSum
    // }

    ...mapGetters(['bigSum'])
    
  },
  methods: {
    increment(){
      // console.log(this)
      this.$store.dispatch("jia",this.n)
      /**直接调用commit 跳过actions
       * this.$store.commit("JIA",this.n) 
       */
    },
    decrement(){
      this.$store.dispatch("jian",this.n)
    },
    incrementOdd(){
      this.$store.dispatch("jiaOdd",this.n)
    },
    incrementWait(){
      this.$store.dispatch("jiaWait",this.n)
    }
  },
  mounted(){
    const x = mapState({sum:'sum',map:'map',ship:'ship'})
  }
};
</script>


<style scoped>
button{
  margin: 5px;

}
</style>