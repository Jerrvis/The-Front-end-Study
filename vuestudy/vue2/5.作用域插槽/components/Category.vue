<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :ships="ships">我是一个插槽</slot> // 将ships 传给插槽使用者
    <a href="https://wiki.biligame.com/blhx/%E6%8B%89%E8%8F%B2" >拉菲</a>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data(){
    return{
      ships: ["拉菲", "新泽西", "翔鹤", "傻白"],
    }
  }
};
</script>


<style scoped>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center; /* 文字居中 */
  background-color: pink;
}
img {
  height: 50%;
}
video {
  width: 100%;
}
</style>