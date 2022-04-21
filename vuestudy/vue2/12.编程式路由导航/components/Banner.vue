<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="testGo">测试一下GO</button>
  </div>
</template>

<script>
export default {
  name:'Banner',
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    testGo(){
      this.$router.go(-2) // 后退两步
    }
  },
}
</script>

<style>

</style>