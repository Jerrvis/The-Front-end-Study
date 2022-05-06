import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users:[],
    isFirst:true, // 是否为刚打开
    isLoading:false, // 表示是否处于加载
    err:'' // 存储错误信息
  }

  // 更新app状态
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div id="app">
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    )
  }
}

