<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽 -->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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