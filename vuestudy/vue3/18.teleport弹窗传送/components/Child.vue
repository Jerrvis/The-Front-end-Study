<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <son/>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  components: { Son },
  name:'Child'
}
</script>

<style>
.child{
  background-color: orange;
  padding:10px;
}
</style>