<template>
  <div class="child">
    <h3>我是Child组件 {{car.name}}------{{car.price}}</h3>
    <son/>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import Son from './Son.vue'
export default {
  components: { Son },
  name:'Child',
  setup(){
    let car = inject('car')

    return {car}
  }
}
</script>

<style>
.child{
  background-color: orange;
  padding:10px;
}
</style>