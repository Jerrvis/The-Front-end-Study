# Node.js



前端浏览器提供js环境

js能用作后端开发，它使用node.js的运行环境。



Node.js 是一个基于Chrome V8 引擎的 JavaScript 运行环境。







## 运行代码

如下文件

![image-20220313134626641](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220313134626641.png)

创建js 代码

``` js
console.log("hello")
```



在控制台中输入 node + js文件 即可运行

如下

![image-20220313134755590](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220313134755590.png)





## fs 文件系统模块



fs 模块时 node.js 官方提供的、用来操作文件的模块。它提供了一些列的方法和属性，用来满足用户对文件操作需求。

如：

* fs.readFile()方法，用来读取指定文件中的内容

* fs.writeFile() 方法，用来向指定的文件中西融入内容

如果要在 JavaScript 代码中，使用fs模块来操作文件，则需要使用如下方式导入它。

``` js
const fs = require('fs')
```



### 读取指定文件中的内容

fs.writeFile() 方法,可以读取指定文件中的内容，语法格式如下：

fs.readFile(path[, options], callback)

- path 必选参数 读取文件路径
- options 可选参数，读取文件的所使用的编码格式
- callback 必选参数，文件读取完成后，通过回调函数拿到读取的结果。



``` js
const fs = require('fs')

fs.readFile('./files/1.txt','utf8',function(err, datastr){
  console.log(err) // 打印读取失败的结果
  console.log('-----------')
  console.log(datastr) // 打印读取成功的结果
})
```



判断是否读取失败

``` js
const fs = require('fs')

fs.readFile('./files/1.txt','utf8',function(err, datastr){
  if(err){
    return console.log("读取问价你失败！ " + err.message)
  }
  console.log("读取文件成功！\n"+ datastr)
})
```



### 向指定文件中写入内容

fs.writeFile() 方法,可以读取指定文件中的内容，语法格式如下：

fs.writeFile(file, data[, options], callback)

- file 必选参数 读取文件路径
- data 必选参数，表示要写入的内容
- options 可选参数，读取文件的所使用的编码格式
- callback 必选参数，文件写入完成后，通过回调函数拿到写入的结果。



``` js
const fs = require('fs')

fs.writeFile('./files/2.txt','碧蓝航线:{拉菲，翔鹤，胡滕, 新泽西}',function(err){
  console.log(err) // 如果文件写入成功 err值为 null
})
```



**判断文件是否写入成功**

``` js
const fs = require('fs')

fs.writeFile('./files/2.txt','碧蓝航线:{拉菲，翔鹤，胡滕, 新泽西}',function(err){
  if (err){
    return console.log("文件写入失败！ " + err.message)
  }
  console.log("文件写入成功！")
})
```



### 修改成绩

有如下 txt 文件

``` txt
拉菲 = 80, 翔鹤 = 100, 胡滕 = 90, 新泽西 = 70
```



通过文件读取、格式化、写入

``` js
const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf8', function (err, datastr) {
  //读取成绩
  if (err) {
    return console.log("读取文件失败！ " + err.message)
  }

  // 分割读取后的数据
  const arrOld = datastr.split(',')

  //格式化字符串
  const arrNew = [];
  arrOld.forEach(item => {
    arrNew.push(item.replace('=', ':'))
  })

  //完成新字符串
  const newStr = arrNew.join("\r\n")

  //写入新文件
  fs.writeFile('./files/新成绩.txt', newStr, function(err){
    if(err){
      console.log('写入成绩失败' + err.message)
    }
  })
})
```



后得到



``` txt
拉菲 : 80
 翔鹤 : 100
 胡滕 : 90
 新泽西 : 70
```





## 路径问题

在终端中使用相对路径默认为终端所在的路径作为起点，这很容易发生错误

``` bash
PS F:\前端code> node ./nodejs/study/修改成绩.js
node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module 'F:\前端code\nodejs\study\修改成绩.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```





因此可以使用**拼接写法**



``` js
//表示当前文件所处的目录
console.log(__dirname)
```



``` bash
PS F:\前端code> node ./nodejs/study/path.js
F:\前端code\nodejs\study
```





使用路径可以这样 

``` js
console.log(__dirname + '/files/1.txt')
```



### 路径模块

path 模块时 Node.js 官方提供的、用来处理路径模块。它提供了一系列的方法和属性，用来满足用户对路径处理的需求



### path.join()

用来将多个路径片段凭借成一个完整对的路径字符串



``` js
const path = new require('path')

const pathstr = path.join("/a","/b/c","../","./d","e") // ../ 会抵消一层路径
console.log(pathstr) // 输出 \a\b\d\e

const spathstr2 = path.join(__dirname,"/files","/成绩.txt")
console.log(pathstr2) // 输出 F:\前端code\nodejs\study\files\成绩.txt
```





### path.basename()

用来从路径中，获取到文件名称部分

``` js
const path = require('path')

const fpath = "/a/b/a/c/d/index.html"

const fullName = path.basename(fpath)
console.log(fullName) // 获取文件名（带扩展名）

const nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt) // 获取文件名（无扩展名）
```



``` bash
PS F:\前端code\nodejs\study> node pathBase.js
index.html
index
```



**extname**

获取文件扩展名

``` js
const path = require('path')

const fpath = "/a/b/a/c/d/index.html"


const extname = path.extname(fpath)
console.log(extname) // 获取文件的扩展名
```



``` bash
PS F:\前端code\nodejs\study> node extname.js
.html
```

