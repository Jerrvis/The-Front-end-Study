<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">news</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/messages">messages</router-link>
        </li>
      </ul>
      <div>
        <!-- 缓存News组件 不缓存Messages组件 -->
        <keep-alive :include="['News','Messages']"> 
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Home",
};
</script>

<style>
</style>