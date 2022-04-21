<template>
  <div class="container">
    <Category title="舰娘">
      <img
        slot="center"
        src="https://patchwiki.biligame.com/images/blhx/2/2c/kl69miqcqvdx8myswuwbstxrzuyzn0w.jpg"
        alt=""
      />
      <div slot="footer" class="foot">
        <a href="https://wiki.biligame.com/blhx/%E6%8B%89%E8%8F%B2" >拉菲</a>
      </div>
    </Category>

    <Category title="武器">
      <ul slot="center">
        <li slot="center" v-for="(item, index) in weapons" :key="index">
          {{ item }}
        </li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://wiki.biligame.com/blhx/%E8%A3%85%E5%A4%87">装备</a>
      </div>

    </Category>

    <Category title="技能">
      <ul slot="center">
        <li slot="center" v-for="(item, index) in skills" :key="index">
          {{ item }}
        </li>
      </ul>
      <template slot="footer">
        <div class="foot">
          <a href="https://wiki.biligame.com/blhx/%E6%8A%80%E8%83%BD">技能</a>
        </div>
        <h4>技能效果随等级会有所改变</h4>
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
    return {
      ships: ["拉菲", "新泽西", "翔鹤", "傻白"],
      weapons: ["128", "457", "天雷", "3381"],
      skills: ["所罗门战神", "黑龙之炎", "鹤之加护", "女王号令"],
    };
  },
};
</script>
<style>
.container,.foot {
  display: flex;
  justify-content: space-around; /* 主轴对齐 */
}
</style>
