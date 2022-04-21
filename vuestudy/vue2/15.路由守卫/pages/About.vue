<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  // 组件内路由守卫
  // 通过路由规则进入该路由组件进入时调用
  // to 为本路由
  beforeRouteEnter(to, from, next) {
    if (to.meta.needAuth) {
      if (localStorage.getItem("ship") === "Laffey") {
        next(); //判断特定身份是否有进入特定区域的权限
      } else {
        alert("抱歉你没有权限进入");
      }
    } else {
      next();
    }
  },

  // 通过路由规则离开该路由组件进入时调用
  // from 为本路由
  beforeRouteLeave(to, from, next) {
    console.log("离开路由", from);
    next();
  },
};
</script>

<style>
</style>