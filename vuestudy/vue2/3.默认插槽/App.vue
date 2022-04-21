<template>
  <div class="container">
    <Category title="舰娘">
      <img
        src="https://patchwiki.biligame.com/images/blhx/2/2c/kl69miqcqvdx8myswuwbstxrzuyzn0w.jpg"
        alt=""
      />
    </Category>

    <Category title="武器">
      <ul>
        <li v-for="(item, index) in weapons" :key="index">
          {{ item }}
        </li>
      </ul>
    </Category>

    <Category title="技能">
      <ul>
        <li v-for="(item, index) in skills" :key="index">
          {{ item }}
        </li>
      </ul>
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
    return {
      ships: ["拉菲", "新泽西", "翔鹤", "傻白"],
      weapons: ["128", "457", "天雷", "3381"],
      skills: ["所罗门战神", "黑龙之炎", "鹤之加护", "女王号令"],
    };
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-around; /* 主轴对齐 */
}
</style>
