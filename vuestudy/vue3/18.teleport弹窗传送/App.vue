<template>
  <div class="app">
    <child/>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name:'App',
  components:{Child}
}
</script>

<style>
.app{
  background-color: aqua;
  padding:10px;
}
</style>