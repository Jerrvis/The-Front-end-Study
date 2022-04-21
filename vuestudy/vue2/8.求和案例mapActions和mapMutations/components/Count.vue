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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数再加</button>
    <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: "Count",
  props: ["title"],
  data(){
    return{
      n:1
    }
  },
  computed:{

    ...mapState(['sum','map','ship']),

    ...mapGetters(['bigSum'])
    
  },
  methods: {
    // increment(){
    //   this.$store.commit("JIA",this.n)
    // },
    // decrement(){
    //   this.$store.commit("JIAN",this.n)
    // },

    // 借助 mapMutaions 生成对应方法调用commit联系mutations (对象方法)
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    // 数组写法, 上方 @click 绑定的方法要改成同名 'JIA','JIAN'
    // ...mapMutations(['JIA','JIAN']),



    /************* */

    // incrementOdd(){
    //   this.$store.dispatch("jiaOdd",this.n)
    // },
    // incrementWait(){
    //   this.$store.dispatch("jiaWait",this.n)
    // }

    // 借助 mapActions 生成对应方法调用dispatch联系actions (对象方法)
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    // 数组写法, 上方 @click 绑定的方法要改成同名 'jiaOdd','jiaWait'
    // ...mapMutations(['jiaOdd','jiaWait']),

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