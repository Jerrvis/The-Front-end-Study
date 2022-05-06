import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = ()=>{
    // 获取用户的输入,连续解构赋值写法
     const {keywordElement:{value:keyword}} = this
    // 发送请求前通知App 更新状态
    PubSub.publish('Laffey',{isFirst:false,isLoading:true})
    // this.props.updateAppState({isFirst:false,isLoading:true})
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      response => {PubSub.publish('Laffey',{isLoading:false,users:response.data.items})},
      error => {PubSub.publish('Laffey',{isLoading:false,err:error.message})}
    )
    
  }

  render() {
    return (
      <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索Github用户</h3>
      <div>
        <input ref={c=>this.keywordElement = c} type="text" placeholder="输入关键词搜索"/>&nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    </section>
    )
  }
}
