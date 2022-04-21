<template>
  <div>
    <button @click="isShow = !isShow">点我弹个窗</button>
    <teleport to='body'>
      <!-- teleport 使得弹窗传送到其他的根标签下 -->
      <div v-if="isShow" class="mask"> 
        <!-- mask为遮罩层 -->
        <div class="dialog">
        <div>我是一个弹窗</div>
        <button @click="isShow = !isShow">关闭弹窗</button>
      </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name:'Dialog',
  setup(){
    let isShow = ref(false)
    return {isShow}
  }
}
</script>

<style>
.mask{
  position: absolute;
  top: 0;left: 0;bottom: 0;right: 0;
  background: rgba(0,0,0,0.3);
}
.dialog{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: pink;
}
</style>