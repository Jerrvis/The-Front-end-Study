<template>
  <button @click="isShowDemo = !isShowDemo">隐藏组件</button>
  <Demo v-if="isShowDemo">
  </Demo>
</template>

<script>
import Demo from './components/Demo'
import {ref} from 'vue'
export default {
  name: 'App',
  components:{Demo},

  setup(){
    let isShowDemo = ref(true)

    return {
      isShowDemo
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
