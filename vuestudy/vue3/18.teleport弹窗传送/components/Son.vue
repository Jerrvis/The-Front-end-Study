<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  components: { Dialog },
  name:'Son'
}
</script>

<style>
.son{
  background-color: pink;
  padding:10px;
}
</style>