<template>
  <div class="container">
    <Count/>
    <hr>
    <Ship/>
  </div>
</template>

<script>
import Count from "./components/Count";
import Ship from "./components/Ship";

export default {
  name: "App",
  components: {
    Count,Ship
  },
  data() {
    return {};
  },
};
</script>

<style>
.container {
  justify-content: space-around; /* 主轴对齐 */
}
</style>
