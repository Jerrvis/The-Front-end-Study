<template>
  <div class="app">
  </div>
</template>

<script>
import { isReactive, isReadonly, reactive, readonly, toRefs , ref, isProxy, isRef} from '@vue/reactivity'
export default {
  name:'App',
  setup(){
    let car = reactive({
      name:'宝马',
      price:'70w'
    })

    let sum = ref(0)

    let car2 = readonly(car)

    console.log('isRef(sum):',isRef(sum))
    console.log('isReactive(car):',isReactive(car))
    console.log('isReadonly(car2):',isReadonly(car2))
    console.log('isProxy(car2):',isProxy(car2))

    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app{
  background-color: aqua;
  padding:10px;
}
</style>