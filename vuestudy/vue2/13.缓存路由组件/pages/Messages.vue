<template>
<div>
  <ul>
    <li v-for="m in messageList" :key="m.id">
      <!-- 路由params传参 字符串写法 -->
      <!-- <router-link :to="`/home/messages/detail/${m.id}/${m.title}`" >{{m.title}}</router-link> -->
      
      <!-- 路由params传参 对象写法, 必须使用name调用路由 不能使用path -->
      <router-link replace :to="{
        name:'jianniang',
        query:{
          id:m.id,
          title:m.title
        }
      }" >{{m.title}}</router-link>
    <button @click="pushShow(m)">push查看</button>
    <button @click="replaceShow(m)">replace查看</button>
    </li>
  </ul>
  <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name:'Messages',
  data(){
    return {
      messageList:[
        {id:'001',title:'拉菲'},
        {id:'002',title:'翔鹤'},
        {id:'003',title:'新泽西'},
        {id:'004',title:'胡滕'}
      ]
    }
  },
  methods: {
      pushShow(m){
        this.$router.push({
          name:'jianniang',
          query:{
            id:m.id,
            title:m.title
          }
        })
      },
      replaceShow(m){
        this.$router.replace({
          name:'jianniang',
          query:{
            id:m.id,
            title:m.title
          }
        })
      }
    }
}
</script>

<style>
</style>