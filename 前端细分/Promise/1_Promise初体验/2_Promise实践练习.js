const fs = require('fs')
const { resolve } = require('path')

// 回调函数的形式
// fs.readFile('./resource/content.txt',(err,data)=>{
//   if(err) throw err;
//   console.log(data.toString());
// })

// Promise形式
const p = new Promise((resolve,reject)=>{
  fs.readFile('./resource/content.txt',(err,data)=>{
    // 如果成功了
      if(err) reject(err);
      resolve(data);
    })
})

p.then(value=>{
  console.log(value.toString());
},reason=>{
  console.log(reason)
})