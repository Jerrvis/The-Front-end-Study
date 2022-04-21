// 该文件用于创建Vuex中最为核心的store

import Vuex from 'vuex'
import Vue from 'vue'

// 使用vuex
Vue.use(Vuex)

// 准备actions 用于响应组件里的动作
const actions = {
  jia(context,value){
    // console.log("actions中的jia被调用了",)
    context.commit('JIA',value)
  },
  jian(context,value){
    // console.log("actions中的jian被调用了",)
    context.commit('JIA',value)
  },
  jiaOdd(context,value){
    // console.log("actions中的jiaOdd被调用了",)
    if(context.state.sum %2 !== 0){
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    // console.log("actions中的jia被调用了",)
    setTimeout(()=>{
      context.commit('JIA',value)
    },1000)
  }
}
// 准备mutations 用于操作数据
const mutations = {
  JIA(state,value){
    // console.log("mutations中的JIA被调用了",)
    state.sum += value
  },
  JIAN(state,value){
    // console.log("mutations中的JIAN被调用了",)
    state.sum -= value
  }
}
// 准备state 用于存放数据
const state = {
  sum:0,
  ship:'夕立',
  map:'6-4'
}
// 准备getters 用于将state中的属性进行加工
const getters = {
  bigSum(state){
    return state.sum*10
  }
}


// 创建 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
