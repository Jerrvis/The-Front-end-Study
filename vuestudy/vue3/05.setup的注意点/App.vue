<template>
  <Demo @hello="showHello" name='Laffey' age='18'>
    <template v-slot:azurlane>
      <span>碧蓝航线</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components:{Demo},

  setup(){
    function showHello(value){
      alert(`showHello事件被触发,参数为${value}`)
    }
    return {
      showHello
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
