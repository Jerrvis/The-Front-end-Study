<template>
  <div class="count">
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和乘10为：{{bigSum}}</h3>
    <h3>我在{{map}}捞{{ship}}</h3>
    <h3>下方组件的总人数是{{shipList.length}}</h3>
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

    ...mapState(['sum','map','ship','shipList']),

    ...mapGetters(['bigSum'])
    
  },
  methods: {
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

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