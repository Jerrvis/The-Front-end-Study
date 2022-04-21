<template>
  <div class="container">
    <Count/>
  </div>
</template>

<script>
import Count from "./components/Count";

export default {
  name: "App",
  components: {
    Count
  },
  data() {
    return {};
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around; /* 主轴对齐 */
}
</style>
