<template>
  <div class="container">
    <Category title="舰娘">
      <template scope="azurlane">
        <ul>
          <li v-for="(item, index) in azurlane.ships" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="舰娘">
      <template scope="azurlane">
        <ol>
          <li v-for="(item, index) in azurlane.ships" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="舰娘">
      <template scope="azurlane">
        <h4 v-for="(item, index) in azurlane.ships" :key="index">
          {{ item }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {};
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around; /* 主轴对齐 */
}
</style>
