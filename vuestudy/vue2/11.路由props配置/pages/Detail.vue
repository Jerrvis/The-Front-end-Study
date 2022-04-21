<template>
  <div>
    <ul>
      <li>舰娘编号：{{id}}</li>
      <li>舰娘名字：{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Detail',
  props:['id','title'],
  computed:{
  }
}
</script>

<style>
</style>