import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = async ()=>{
    // 获取用户的输入,连续解构赋值写法
    const {keywordElement:{value:keyword}} = this
    // 发送请求前通知App 更新状态
    PubSub.publish('Laffey',{isFirst:false,isLoading:true})
    // this.props.updateAppState({isFirst:false,isLoading:true})
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
    //   response => {PubSub.publish('Laffey',{isLoading:false,users:response.data.items})},
    //   error => {PubSub.publish('Laffey',{isLoading:false,err:error.message})}
    // )
    
    // 发送网络请求————使用fetch发送
    // fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
    //   response=>{console.log('联系服务器成功')
    //   // response.json()返回一个promise实例
    //   return response.json()
    // }).then(value=>{
    //   console.log('获取数据成功',value)
    // }).catch(reason=>{
    //   console.log('失败了',reason)
    // })

    try {
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyword}`)
      const data = await response.json()
      PubSub.publish('Laffey',{isLoading:false,users:data.items})
    } catch (error) {
      console.log(error)
    }

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
