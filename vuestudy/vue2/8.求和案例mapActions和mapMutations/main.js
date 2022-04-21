import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
//先使用 vuex 引入store
import store from './store'

Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)


new Vue({
  el:'#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
