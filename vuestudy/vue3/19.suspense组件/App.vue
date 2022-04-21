<template>
  <div class="app">
    <h1>我是App组件</h1>
    <!-- Suspense 的fallback可以分别显示加载中与加载后的数据 -->
    <Suspense>
      <template v-slot:default>
        <child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入 app 与子组件共同渲染并展示
// import Child from './components/Child.vue'

// 异步引入 app 先渲染展示 子组件较慢
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
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