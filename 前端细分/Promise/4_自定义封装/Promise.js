function Promise(executor) {

  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  const self = this;
  // 回调函数
  this.callBacks = []

  // resolve 函数
  function resolve(data) {
    // 判断是否能改变状态
    if (self.PromiseState !== 'pending') return;
    // 1. 修改状态(promiseState)
    self.PromiseState = 'fullfilled';
    // 2. 设置结果值(promiseResult)
    self.PromiseResult = data;
    // 3.调用回调函数
    self.callBacks.forEach(item => {
      item.onResolved(data);
    })
  }
  // reject 函数
  function reject(data) {
    // 判断是否能改变状态
    if (self.PromiseState !== 'pending') return;
    // 1. 修改状态(promiseState)
    self.PromiseState = 'rejected';
    // 2. 设置结果值(promiseResult)
    self.PromiseResult = data;
    // 3.调用回调函数
    self.callBacks.forEach(item => {
      item.onRejected(data);
    })
  }

  try {
    // 同步调用
    executor(resolve, reject);
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  const self = this
  // 没有回调函数传参则设置默认回调
  if(typeof onRejected !== 'function'){
    onRejected = reason=>{
      throw reason;
    }
  }
  if(typeof onResolved !== 'function'){
    onResolved = value=>value;
  }
  return new Promise((resolve, reject) => {
    // 封装函数
    function callback(type){
      try {
        let result = type(self.PromiseResult);
        // 判断
        if (result instanceof Promise) {
          result.then(v => {
            resolve(v)
          }, r => {
            reject(r)
          })
        } else {
          // 结果对象状态为成功
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }


    // 添加then方法
    if (this.PromiseState === 'fullfilled') {
      callback(onResolved)
    }
    if (this.PromiseState === 'rejected') {
      callback(onRejected)
    }
    if (this.PromiseState === 'pending') {
      // 保存回调函数
      this.callBacks.push({
        onResolved: function () {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        }
      })
    }
  })
}

Promise.prototype.catch = function(onRejected){
  return this.then(undefined,onRejected)
}

Promise.resolve = function(value){
  return new Promise((resolve,reject)=>{
    if(value instanceof Promise){
      value.then(v=>{
        resolve(v)
      },r=>{
        reject(r)
      })
    }else{
      resolve(value)
    }
  })
}

Promise.reject = function(reason){
  return new Promise((resolve,reject)=>{
    reject(reason)
  })
}

Promise.all = function(promises){
  return new Promise((resolve,reject)=>{
    let count = 0;
    let arr = []
    for(let i =0 ; i < promises.length; i++){
      promises[i].then(v=>{
        count++;
        arr[i] = v
        // 全部成功才能修改状态
        if(count === promises.length) resolve(arr)
      },r=>{
        reject(r);
      })
    }
  })
}

Promise.race = function(promises){
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(v=>{
        resolve(v)
      },r=>{
        reject(r)
      })
    }
  })
}