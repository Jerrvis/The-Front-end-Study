# HTML

Hyper Text Markup Language(超文本标记语言) 

超文本包括 文字、鱼片、视频、音频、动画等



HTML是由W3C制定的



W3C 即 World Wide Web Consortium(万维网联盟)

http://www.w3c.org/

http://www.chinaw3c.org/





## 标签 

如下有开放标签 head body这些成对出现的

闭合标签 meta

``` html
<!DOCTYPE html>
<!-- html 总标签 -->
<html lang="en">
    <!-- head 头标签 -->
<head>
    <!-- meta描述网站 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <!-- body 主体标签 -->
<body>
    <!-- 这是注释的格式 -->
</body>
</html>
```



## 注释 

``` html
<!-- 这是注释的格式 -->
```



## HelloWorld

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="Jerrvis在学习">
    <title>Document</title>
</head>
<body>
hello,world!
    
</body>
</html>
```



## 基本标签

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 标题标签 -->
<h1>一级标签</h1>
<h2>二级标签</h2>
<h3>三级标签</h3>
<h4>四级标签</h4>

<!-- 段落标签 -->
<p>两支老虎 两支老虎</p>
<p>跑的快 跑得快</p>

<!-- 换行标签 -->
两支老虎 两支老虎<br/>
跑的快 跑得快<br/>

<!-- 水平线标签 -->
<hr>

<!-- 粗体和斜体标签 -->
<strong>这是粗体</strong><br/>
<em>这是斜体</em><br/>

<!-- 特殊符号 -->
&nbsp;空              格<br>
空&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格<br>
&gt;<br><!-- 大于 -->
&lt;<br><!-- 大于 -->
&copy;版权所有


</body>
</html>
```



## 图像标签



![image-20220213124255862](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220213124255862.png)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图像标签</title>
</head>
<body>
<!--图片
src -->
<img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="1280"height="720">
</body>
</html>
```



## 超链接





``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>超链接</title>
</head>
<body>
<!--锚链接 可以回到顶部-->
<a name="top"></a>

<!--超链接
a:
href 必填
target="_blank" 在新标签页中打开
"-self" 在自己的王亚中打开-->
<a href="3.图像标签.html" target="_blank">点击我跳转到页面</a><br>
<a href="https://www.baidu.com" target="_blank">点击我跳转到页面</a>
<!--图片超链接-->
<br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a>

<br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a><br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a><br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a><br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a><br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a><br>
<a href="3.图像标签.html" target="_blank"><img src="../../图片/Shoukaku.jpeg" alt="我的老婆" title="悬停文字"width="320"height="180"></a>

<a href="#top">回到顶部</a>
<a name="down"></a>

<!--功能性链接-->
<br>
<a href="675926782@qq.com">点击邮件联系</a>


<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2::52" alt="加我领取老婆" title="加我领取老婆"/></a>
</body>
</html>
```



## 行内元素与块元素

行内元素，内容撑开宽度，左右都是行内元素可以排在一行

块元素，无论内容多少，该元素独占一行



## 列表

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!--有序列表-->
<ol>
    <li>Java</li>
    <li>Python</li>
    <li>运维</li>
</ol>
<!--无序列表-->
<ul>
    <li>Java</li>
    <li>Python</li>
    <li>运维</li>
</ul>

<!--自定义列表-->
<dl>
    <dt>ship</dt> <!--列表名称-->

    <dd>Lafit</dd>
    <dd>Shkoukaku</dd>
    <dd>Unicord</dd>
</dl>
</body>
</html>
```





## 表格

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>表格</title>
</head>
<body>
    <!--表格table
    行 tr
    列 td-->
<table border="1px">
    <tr>
        <td colspan="4">1-1</td> <!--跨行-->
    </tr>
    <tr>
        <td rowspan="2">2-1</td> <!--跨列-->
        <td>2-2</td>
        <td>2-3</td>
        <td>2-3</td>
    </tr>
    <tr>
        <td>3-2</td>
        <td>3-3</td>
        <td>3-4</td>
    </tr>

</table>
</body>
</html>
```



## 视频和音频

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>媒体元素</title>
</head>
<body>
<!--音频和视频-->
<video src="../resource/video/头文字D之Rage Your Dream.flv" controls autoplay></video>
    
</body>
</html>
```



## 网页结构

* header 头部
* footer 脚部
* section 独立区域
* article 文章内容
* aside 相关内容应用
* nav 导航类辅助

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<head> 
    <h2>网页头部</h2>

</head>
<section>
    <h2>网页主题</h2>

</section>
<footer>
    <h2>网页脚部</h2>
</footer>
</body>
</html>
```



## iframe内联框架

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<iframe src="" name="Hello" frameborder="0" width="1280" height="720"></iframe>
<a href="3.图像标签.html" target="Hello">点击跳转</a><!--跳转到我的指定网站-->
</body>

</html>
```





## 表单

注册登录等作用出现的弹窗

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录注册</title>
</head>
<body>
    <!--表单
    action :表单提交到的地址，可以是网站，也可以是请求处理地址
    method :post,get 提交方式-->
    
<form action="3.图像标签.html" method="post">
    <p>账号：<input type="text" name="username" maxlength="16"></p>
    <p>密码：<input type="password" name="pwd"></p>
    <!--单选框标签
    input type="radio"
    -->
    <p>性别
        <input type="radio" value="boy" name="sex">女
        <input type="radio" value="girl" name="sex">女
    </p>
    <!--多选框
    input type="radio"
    -->
    <p>爱好
        <input type="checkbox" value="sleep" name="hobby">睡觉
        <input type="checkbox" value="code" name="hobby">敲代码
        <input type="checkbox" value="game" name="hobby">聊天
        <input type="checkbox" value="sport" name="hobby">游戏
    </p>
    <!--按钮
    type="button" 普通按钮
    type="reset" 清空表单
    type="submit" 提交表单
    type="image" 图片按钮
    -->
    <p>按钮：
        <input type="button" name="btnl" value="点击边长">
        <input type="image" src="../resource/image/Shoukaku.jpeg">
    </p>
    <!--下拉框 checked默认选中
    -->
    <p>
        <select name="列表名称" id="">
            <option value="China" checked>中国</option>
            <option value="America">米国</option>
            <option value="Japan">日本</option>
            <option value="Korea">韩国</option>
        </select>
    </p>
    <!--文本框
        cols 列
        rows 行
    -->
    <p>反馈：
        <textarea name="textarea" id="" cols="50" rows="10">文本内容</textarea>
    </p>
    <!--文件域
    -->
    <p>
        <input type="file" name="files">
        <input type="button" value="上传" name="upload">
    </p>

    <!--邮件验证-->
    <p>
        <input type="email" name="email">
    </p>
    <!--url-->
    <p>
        <input type="url" name="url">
    </p>
    <!--数字-->
    <p>
        <input type="number" name="num" max="100" min="0" step="10">
    </p>
    <!--滑块-->
    <p>音量
        <input type="range" name="voice" min="0" max="100" step="2">
    </p>
    <!--搜索框-->
    <p>
        <input type="search" name="search">
    </p>

    <p>
        <input type="submit">
        <input type="reset" value="清空表单">
    </p>
</form>

</body>
</html>
```

表单元素格式

![image-20220214095609221](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220214095609221.png)



## 表单扩展

* readonly 只读不可修改
* disabled 禁用不可选
* hidden 隐藏



## 表单验证

常用方式 

* pleaseholder 表示提示
* required 非空判断
* pattern 正则表达式判断



***

# CSS

Cascading Style Sheet 层叠样式表

CSS:表现（美化网页）

字体，颜色，边距、高度、宽度、浮动



## 语法

外部样式 链接式

推荐使用下列方式

建立文件

![image-20220215095429297](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220215095429297.png)

html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!--规范 <style> 可以写代码
        选择器{
            声明1
            声明2
        }；
    -->
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
<h1>我是标题</h1>
    
</body>
</html>
```



css

```css
h1{
    color: blueviolet;
}
```







内部样式

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!--规范 <style> 可以写代码
        选择器{
            声明1
            声明2
        }；
    -->
    <style>
        h1{
            color: blueviolet;
        }
    </style>
</head>
<body>
<h1>我是标题</h1>
    
</body>
</html>
```

CSS优势：

1. CSS与HTML 让内容与表现分离
2. 网页结构表现统一，实现复用
3. 样式丰富
4. 利用SEO容易被搜索引擎收录
5. 建议使用独立于HTML的CSS文件



## 3种导入方式

上方有两种样式



第三种 行内样式

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <H1 style="color: red;">我是标题</H1>
</body>
</html>
```



当三种样式冲突时，采用就近原则

优先级

行内样式 > 内部样式 > 外部样式



外部样式 

导入式

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>
        @import url("css/style.css");/*导入式*/
    </style>
</head>
<body>
    <H1>我是标题</H1>
</body>
</html>
```



链接式

```html
<link rel="stylesheet" href="CSS/style.css">
```





##  选择器

选择页面上某一个或某一类元素

### 基本选择器

选择题冲突,时不遵循就近选择

优先级如下

id>class>标签

#### 标签选择器

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>
        /* 标签选择器会选择页面上所有同名的标签 */
        h1{
            color: blue;
        }
        p{
            font-size: 70px;
        }
    </style>
</head>
<body>
    <h1>标题1</h1>
    <p>内容</p>
    <h1>标签2</h1>
</body>
</html>
```



#### 类选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 类选择器 -->
    <style>
        .ship{
            color: blueviolet;
        }
    </style>
</head>
<body>
    <h1 class="ship">拉菲</h1>
    <h2 class="ship">翔鹤</h2>
    <h3>标题</h3>
</body>
</html>
```



#### ID选择器

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* id选择器: id 必须保证全局唯一 
        只能有一个选择器
        */
        #Lafit{/*id选择器*/
            color: aqua;
        }
        .style1{/*类选择器*/
            color: blue;
        }
        h3{/*标签选择器*/
            color: brown;
        }
    </style>
</head>
<body>
    <h1 id="Lafit" class="style1">拉菲</h1>
    <h2 id="Shoukaku" class="style1">翔鹤</h2>
    <h3 id="NJ" class="style1">新泽西</h3>
</body>
</html>
```



### 层次选择器



``` html
<body>
    <p>p1</p>
    <p class="active">p2</p>
    <p>p3</p>
    <ul>
        <li>
            <p>p4</p>
        </li>
        <li>
            <p>p5</p>
        </li>
        <li>
            <p>p6</p>
        </li>
    </ul>
    <p class="active">p7</p>
    <p class="active">p8</p>
</body>
```



#### 后代选择器

body 后面的所有p标签

``` html
/* 后代选择器 */
body p{
    background: beige;
}
```



#### 子选择器

选择标签的一代

``` html
body>p{
    background: blue;
}
```



#### 兄弟选择器

选择相邻的兄弟标签,只能选一个

```html
.active +p{
    color: blue;
}
```



#### 通用兄弟选择器

选中当前元素的下列所有兄弟元素

```html
.active~p{
            color: pink;
        }
```





### 伪类选择器

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        /* ul 第一个子元素 */
        ul li:first-child{
            background: beige;
        }
        /* ul 最后一个子元素 */
        ul li:last-child{
            background: green;
        }

        /* 选中p1,定位到父元素，选择当前的第一个元素 */
        p:nth-child(1){
            background: pink;
        }
        /* 选择父元素，下的P元素第二个 */
        p:nth-of-type(2){
            background: yellow;
        }
    </style>
</head>
<body>
    <p>p1</p>
    <p class="active">p2</p>
    <p>p3</p>
    <ul>
        <li>
            li1
        </li>
        <li>
            li2
        </li>
        <li>
            li3
        </li>
    </ul>
    <p class="active">p7</p>
    <p class="active">p8</p>
</body>
</html>
```





### 属性选择器

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo a{
            float: left;
            display: block;
            height: 50px;
            width: 50px;

            border-radius: 10px;
            background: pink;
            text-align: center;
            color: gainsboro;
            text-decoration: none;
            margin-right: 5px;
            font: bold 20px/50px Arial;
        }

        /* 存在id 属性的元素 */
        a[id]{
            background: yellow;
        }
        /* 存在id 且值为 first的元素*/
        a[id=first]{
            background: purple;
        }
        /*  *= 表示包含特定内容的值 */
        a[href*="images"]{
            background: green;
        }
        /* ^= 表示以特定内容开头的值 */
        a[href^="images"]{
            background: green;
        }
        /* $= 表示以特定内容开头的值 */
        a[href$="jpg"]{
            background: green;
        }
    </style>
</head>
<body>
    <p class="demo">
        <a href="http://www.baidu.com" class="link">1</a>
        <a href="" id="first" target="_blank">2</a>
        <a href="" class="link">3</a>
        <a href="images/123.png">4</a>
        <a href="images/123.html">5</a>
        <a href="images/123.jpg">6</a>
        <a href="abc">7</a>
        <a href="abc">8</a>
        <a href="">9</a>
        <a href="">0</a>
    </p>
</body>
</html>
```



## 美化

### span标签

抓重点要突出的字使用span标签美化

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #Lafit{
            font-size: 20px;
        }
    </style>
</head>
<body>
    <span id="Lafit">拉菲</span>
</body>
</html>
```







### 文本样式



　　文本样式主要涉及多个字符的排版效果。

#### 一、定义文本水平对齐

　　text-align 属性来定义文本的水平对齐方式。

　　语法：

```
text-align: left | right | center | justify
```

- 　　left 表示默认值，左对齐；
- ​    right 表示右对齐；
- ​    center 表示居中对齐；
- ​    justify 表示两端对齐；

　**Tips**: CSS3 新增了4个属性：start | end | match-parent | justify-all ，由于浏览器支持不是很好，暂不介绍，可以去 W3C 官网上进行了解和学习。

#### 二、定义文本垂直对齐

　　使用 vertical-align 属性设置或检索对象内容的垂直对其方式。

　　语法：

```
vertical-align``: ``auto` `| ``baseline` `| ``sub` `| ``super` `| ``top` `| ``text-top` `| ``middle` `| ``bottom` `| ``text-bottom` `| length
```

- 　　auto：根据 layout-flow 属性的值对齐对象内容；
-    baseline：表示默认值，表示将支持 valign 特性的对象内容与基线对齐；
-    sub：表示垂直对齐文本的下标；
-    super：表示垂直对齐文本的上标；
-    top：表示将支持 valign 特性的对象的内容对象顶端对齐；
-    text-top：表示将支持 valign 特性的对象的文本与对象顶端对齐；
-    middle：表示将支持 valign 特性的对象的内容对象中部对齐；
-    bottom：表示将支持 valign 特性的对象的内容对象底端对齐；
-    text-bottom：表示将支持 valign 特性的对象的文本与对象顶端对齐；
-    length：表示由浮点数和单位标识符组成的长度值或者百分数，可为负数，定义由基线算起的偏移量；

![img](https://img2018.cnblogs.com/blog/1691302/201907/1691302-20190722144203734-301785866.jpg)

　　vertical-align 不影响块级元素中的内容对齐，它只针对于 行内元素或者行内块元素，特别是行内块元素， **通常用来控制图片/表单与文字的对齐**。

　　![img](https://img2018.cnblogs.com/blog/1691302/201907/1691302-20190722144301171-695479540.png)

##### 　　　　1、图片、表单和文字对齐

　　　　　　可以通过vertical-align 控制图片和文字的垂直关系了。 默认的图片会和文字基线对齐。

##### 　　　　2、去除图片底侧空白缝隙

　　　　　　图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样会造成一个问题，就是图片底侧会有一个空白缝隙。

　　　　　**解决方法a:(推荐使用)**

　　　　　　给 img vertical-align:middle | top 等等。 让图片不要和基线对齐。

　　　　　**解决方法b:**

　　　　　　给 img 添加 display：block; 转换为块级元素就不会存在问题了。

#### 三、定义行高

　　行高也称为行距，是段落文本行与行之间的距离。使用 line-height 属性定义行高。

　　语法：

```
line-height``: ``normal` `| length
```

- 　　normal：表示默认值，一般为 1.2em；
-    length：表示百分比数字，也可以为单位标识符组成的长度值；常用的属性值单位有三种，分别为像素px，相对值em和百分比%，使用最多的是像素px；

#### 四、定义字距和词距

##### 　　1、字距

　　　　使用 letter-spacing 属性定义字距，所谓字间距就是字符与字符之间的空白，取值为长度值，由浮点数字和单位标识符组成，默认为 normal，表示默认间隔。

　　　　语法：

```
letter-spacing``: ``2em``;
```

##### 　　2、词距 (对中文无效)

　　　　word-spacing 属性用于定义英文单词之间的间距，对中文字符无效。和 letter-spacing 一样，其属性值可为不同单位的数值，允许使用负值，默认为normal。

　　　　word-spacing 和 letter-spacing 均可对英文进行设置。不同的是 letter-spacing 定义的为字母之间的间距，而 word-spacing 定义的为英文单词之间的间距。

　　　　语法：

```
word-spacing``:``2em``;
```



#### 五、定义缩进

　　text-indent 属性用于设置首行文本的缩进，其属性值可为不同单位的数值、em字符宽度的倍数、或相对于浏览器窗口宽度的百分比%，, 建议使用em作为设置单位。

　　允许使用负值，使用复制，代表悬垂缩进。

　　1em 就是一个字的宽度 如果是汉字的段落， 1em 就是一个汉字的宽度。

　　Demo：

```
text-indent``: ``2em``;
```





### 超链接伪类

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 消除下划线 */
        a{
            text-decoration: none;
            color: #000000;
        }
        /* 鼠标悬浮颜色 */
        a:hover{
            color: pink;
        }
        /* 鼠标按住未释放的状态 */
        a:active{
            color: green;
        }
        /* 访问后的颜色 */
        a:visited{
            color: red;
        }
        /* 阴影颜色 水平偏移 垂直偏移 阴影半径
         */
        #Lafit{
            text-shadow:black 10px 10px 10px;
        }
    </style>
</head>
<body>
<a href="#">
    <img src="../../resource/image/Lafit.jpeg" alt="">
</a>
<p id="Lafit">
    <a href="#">拉菲</a>
</p>
</body>
</html>
```





### 列表样式

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #nav{
            width: 300px;
        }
        title{
            font-size: 19px;
            font-weight: bold;
            text-indent: 1em;
            line-height: 30px;
        }
        ul li{
            height: 30px;
            list-style: none;
            text-indent: 1em;
        }
        a{
            text-decoration: none;
            font-size: 14px;
            text-indent: 1em;
        }
        a:hover{
            text-decoration: underline;
            color: white;
        }
    </style>
</head>
<body>
<div id="nav">
    <h2>舰艇</h2>
    <ul>
        <li><a href="#">安克雷奇</a>&nbsp;&nbsp;<a href="#">夕立</a>&nbsp;&nbsp;<a href="#">柴郡</a></li>
        <li><a href="#">拉菲</a>&nbsp;&nbsp;<a href="#">翔鹤</a>&nbsp;&nbsp;<a href="#">新泽西</a></li>
    </ul>

</div>

</body>
</html>
```



　　



### 背景

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 1280px;
            height: 720px;
            border: 1px solid red;
            background-image: url("../../resource/image/Shoukaku.jpeg");
        /* 默认平铺 */

        }
        .div1{
            background-repeat: repeat-x;/* 水平平铺 */
        }
        .div2{
            background-repeat: repeat-y;/* 垂直平铺 */
        }

    </style>
</head>
<body>
<div class="div1">

</div>
<div class="div2"></div>
</body>
</html>
```





### 渐变

www.grabient.com



### 盒子模型

![image-20220218092832034](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220218092832034.png)

margin: 外边距

padding: 内边距

border: 边框



#### 边框

边框的粗细

边框的样式

边框的颜色

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1,ul,li,a,body{
            margin: 0;
            padding:0;
            text-decoration: none;
        }
        #box{
            width: 300px;
            border: 1px solid red;
        }
        h2{
            background-color: #2fb89f;
            font-size: 16px;
            line-height: 30px;
        }
        form{
            background: #FFC0CB;
        }
        div:nth-last-of-type(1) input{
            border: 3px solid black;
        }
        div:nth-last-of-type(2) input{
            border: 3px solid purple;
        }

    </style>
</head>
<body>
    
<div id="box">
    <h2>会员登录</h2>
    <form action="#">
        <div>
            <span>用户名：</span>
            <input type="text">
        </div>
        <div>
            <span>密码：</span>
            <input type="text">
        </div>
        <div>
            <span>邮箱：</span>
            <input type="text">
        </div>
    </form>
</div>
</body>
</html>
```



### 圆角

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 100px;
            height: 50px;
            margin: 30px;
            border: 5px solid red;
            border-radius: 100px 100px 0 0 ; /*圆角 左上 右上 右下  左下*/
        }
        img{
            border-radius: 25px;

        }
    </style>>
</head>
<body>
<div></div>
<img src="../../resource/image/Lafit.jpeg" alt="">
</body>
</html>
```



## display和浮动

![image-20220219093826599](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220219093826599.png)



块级元素：独占一行

h1---h6     p    div

行内元素：不独占一行

span     a    img    strong



``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .layer01{
            border: 1px #00F dashed;
            display: inline-block;
            float: right;
        }
        .layer02{
            border: 1px #00F dashed;
            display: inline-block;
            float: right;
            clear: both; /*左右都不能有浮动*/
        }
    </style>
</head>
<body>
    
<div id="father">
    <div class="layer01">翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤翔鹤</div>
    <div class="layer02">拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲</div>

</div>
</body>
</html>
```



## 父级边框坍塌问题

解决方法

1.增加父级边框高度

2.下方创建一个空div

3.overflow

4.父类添加一个伪类

增加一个 overflow:hidden

边框滑动条

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #content{
            width: 200px;
            height: 150px;
            overflow: scroll; /*边框滑动条解决溢出*/
        }
    </style>
</head>
<body>
<div id="content"> 
    <img src="../../resource/image/Lafit.jpeg" alt="">
    <p>拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲拉菲</p>
</div>
</body>
</html>
```



添加伪类（添加下列代码）

``` html
<style>
    #father{
        /*内容*/
    }
    #father{
        content: '';
        display: block;
        clear: both;
    }
</style>
```



## 定位

1. 相对定位
2. 绝对定位
2. 固定定位
3. z-index



### 相对定位

相对于原来的位置，进行指定的便宜，相对定位，它仍然在标准文档流中，原来的位置会保留

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            margin: 10px;
            padding: 5px;
            font-size: 12px;
            line-height: 25px;
        }
        #father{
            border: 1px solid #666;
        }

        #first{
            background-color: #a13d30;
            border: 1px dashed #b27530;
            position: relative; /*相对定位*/
            top: -20px; /*向上移*/
            left: 20px; /*向右移*/
        }
        #second{

        }


    </style>
</head>
<body>


<div id="father">
    <div id="first">拉菲</div>
    <div id="second">翔鹤</div>
    <div id="third">新泽西</div>
</div>
</body>
</html>
```



### 绝对定位

没有父级元素的情况下，相对于浏览器定位

而父级元素有定位，则相对于父级元素进行偏移

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            margin: 10px;
            padding: 5px;
            font-size: 12px;
            line-height: 25px;
        }
        #father{
            border: 1px solid #666;
        }

        #first{
            background-color: #a13d30;
            border: 1px dashed #b27530;
            position: relative; /*相对定位*/
            top: -20px; /*向上移*/
            left: 20px; /*向右移*/
        }
        #second{
            background-color: #a13d30;
            border: 1px dashed #b27530;
            position: absolute; /*绝对定位*/ 
            right: 30px;
        }


    </style>
</head>
<body>


<div id="father">
    <div id="first">拉菲</div>
    <div id="second">翔鹤</div>
    <div id="third">新泽西</div>
</div>
</body>
</html>
```



### 固定定位

如淘宝网顶部的账号登录信息栏

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            height: 1000px;
        }
        div:nth-of-type(1){
            width: 100px;
            height: 100px;
            background: red;
            position: absolute;
            right: 0;
            bottom: 0;
        }
        div:nth-of-type(2){
            width: 50px;
            height: 50px;
            background: yellow;
            position: fixed;
            right: 0;
            bottom: 0;
        }

    </style>
</head>
<body>
<div>div1</div>
<div>div2</div>
</body>
</html>
```



### z-index

z-index 图层

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #content{
            padding: 0px;
            margin: 0px;
            overflow: hidden;
            line-height: 25px;
            font-size: 12px;
            border: 1px #000 solid;
    	}
        ul,li{
            padding: 0px;
            margin: 0px;
            list-style: none;
        }
        #content ul{
            position: relative;

        }
        .text,.tipBg{
            position: absolute;
            width: 380px;
            height: 25px;;
            top: 200px;
        }
        .text{
            color: azure;
            z-index: 999; /*最高层级*/
            opacity: 0.5; /*透明度*/
        }
    </style>
</head>
<body>
    
<div id="content">
    <ul>
        <li><img src="../../resource/image/Shoukaku.jpeg" alt=""></li>
        <li class="text">翔鹤</li>
        <li class="tipBg">我的老婆</li>
    </ul>
</div>
</body>
</html>
```



## 动画



# JavaScript

JavaScript 是一门网页脚本语言。

UI新版本已经更新到ES6版本

但是大部分浏览器仍只支持ES5



## Helloworld

**外部引入**

helloworld.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <!-- 外部引入 -->
    <script src="./Helloworld.js"></script>
</head>
<body>

    
</body>
</html>
```

helloworld.js

``` js
alert('Hello,World!');
```



**内部引入**

helloworld.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    
    <script>
    	alert('Hello,World!');
    	//内部引入
    </script>
</head>
<body>

    
</body>
</html>
```





## 定义变量



``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var score = 1; /*定义数字*/
        var name = 'Lafit'; /*定义字符串*/
        var nameList = ['Lafit','Shoukaku']; /*定义列表*/
        if (score > 80){
            alert("80");
        }else if(score > 60){
            alert("60");
        }else{
            alert("50");
        }
        /*
        console.log(score) 在浏览器控制台打印变量
        */ 

    </script>
</head>
<body>
    
</body>
</html>
```



## 数据类型

* number

   不区分整数和小数

  ``` js
  123
  123.1 
  1.231e3 // 科学计数法
  -99 // 负数
  NaN // not a number
  infinity // 无限大
  ```

  

* 字符串

  ``` js
  "abc"
  'abc'
  ```

  

* 布尔值

  ``` js
  true
  false
  ```

  

* 逻辑运算符

  ``` js
  && 两个为真，结果为真
  || 一个为真，结果为真
  !  
  ```

  

* 比较运算符

  ``` js
  =
  ==  //等于（类型不一样，值一样 为 true）
  === //绝对等于（类型一样，纸一样 为 true）
  ```

  注 NaN与所有数值不相等，包括自己，只能用 isNaN(NaN)

  ``` js
  console.log(Math.abs(1/3-(1-2/3))<0.0000001); //比较浮点数
  ```

  

* null 和 undefined

  ​	null 空

  ​	undefined 未定义

  

* 数组

  ``` js
  var arr = [1,3,124.1241,4235.1412,'Hello','worle',null,true];
  ```



## 对象

每个属性之间使用逗号隔开，最后一个不需要

``` js
var ship = {
    name:'Lafit',
    age:15,
    equip:[100,'lei'],
    isClock:true
}
```





## 严格检查模式strict

js的变量默认为全局变量

可在代码中加入

``` js
'use strict';
```

预防JavaScript随意性产生的问题，局部变量将以用let去定义

建议使用ES6 的 let 去定义局部变量



***



## 数据类型

### 字符串

正常字符串用单引号或双引号包裹

字符串内容不可变

注意转义字符 \

``` js
\'
\n
\t
\u4e2d \u####    unicode 字符串
\41               ascii字符
```



多行字符串编写 （使用 ~ 键 的点包起来）

``` js
let f = 
        `nuiosghndiu
        afsigfiu
        vgbnbneiw`;
        
```



格式化字符串 （使用 ~ 键 的点包起来）

``` js
let name = 'Lafit';
let announce = `${name} is my wife`;
console.log(announce)
```



字符串长度

``` js
console.log(announce.length)
```



大小写转换

``` js
announce.toUpperCase()
announce.toLowerCase()
```



字符串元截取

```js
announce.substring(1,3)
```





### 数组

array可以包含任意类型的数据

``` js
var arr = [1,3,4,5,8,0]
```



长度

``` js
arr.length
```

长度可以赋值，数组大小发生变化，如果赋值过小，元素还会丢失



indexOf

``` js
arr.indexOf(3)
```

获得元素的下标索引



slice() 截取array的一部分，返回一个新的数组

``` js
arr.slice(2,4)
```



push\pop

``` js
arr.push() 压入到尾部
arr.pop() 弹出尾部一个元素

```



unshift(),shif()

``` js
arr.unshift() // 压入到头部
arr.shift() // 弹出头部一个元素
```



sort 排序

``` js
arr.sort()
```



翻转

``` js
arr.reverse()
```



concat()

不修改数组，返回一个插入的新数组

```js
var arr = [1,2,3];
arr.concat([4,5,6]); //[1,2,3,4,5,6]



```



链接join

``` js
var arr = [1,2,3];
arr.join('-'); // '1-2-3'
```



多维数组

``` js
var arr = [[1,2],[3,4],142,456,6]
```



***



## 对象

js的对象由键值组成

js所有键都是字符串

``` js
var ship = {
            class:"Bensen",
            age: 10,
            name: 'Lafit',
            level:100
        }
```



对象赋值

``` js
ship.name = "Shoukaku"
"Shoukaku"
ship.name
"Shoukaku"
```



创建不存在的对象属性

``` js
ship.skillLevel = 10
10
```



删除属性

``` js
delete ship.skillLevel = 10
true
ship
```



判断属性是否在对象

``` js
'level' in ship
true
```



判断一个属性是否是对象自身拥有的

``` js
ship.hasOwnProperty('toString')
false
ship.hasOwnProperty('level')
true
```





## 流程控制

#### if 判断

```js
if (ship.age>30){
    alert('翔鹤');
}else if (ship.age>3){
    alert('拉菲');

}else {
    alert('安克雷奇');
}
```



#### while 循环

``` js
while(ship.age < 30){
	ship.age = ship.age + 1;
    console.log(shipage)
}
```



#### for 循环

``` js
for (let i = 0; i < 100; i ++ ){
    console.log(i)
}
```



#### 数组循环

``` js
arr.forEach(function (value) {console.log(value)})
```

``` js
for(let i in arr){
    console.log(arr[i])
}
```







## map与set

Map:

``` js
'use strict';
var map = new Map([['Lafit',50],['Shoukaku',60],['Ankerage',30]]);
//创建map

map.set('Huten',80);
//添加元素
var num = map.get('Ankerage');
console.log(num);
map.delete('Huten');
//删除元素
for (let i of map){//遍历
            console.log(i[0] + '=' +i[1]);
        }
```



Set: 无序不重复集合

``` js
var set = new Set([1,1,1,3,4,5,6,8,8,6,6]);
set // {1, 3, 4, 5, 6, 8}
set.add(10);
//增加元素
set.delete(10);
//删除元素
console.log(set.has(3)); //是否包含某个元素

for (let i of set){//遍历
            console.log(i);
        }
```



***



## 函数

定义函数

``` js
function abs(x){
    if (x>= 0 ){
        return x;
    }else {
        return -x;
    }
} 
```

一旦执行到return 代表函数借宿，返回结果

如果没有执行return， 默认返回undefined



也可以用另一种方式定义

``` js
var abs = function(x){
    if (x>= 0 ){
        return x;
    }else {
        return -x;
    }
} 
```



因为js不对参数作类型要求，所以需要手动定义异常

``` js
var abs = function(x){
    if (typeof x!== 'number'){
        throw 'Not a Number';
    }
    if (x>= 0 ){
        return x;
    }else {
        return -x;
    }
} 
```



通过**aguments**可以遍历所有的参数

``` js
var abs = function(x){
    for (let x=0; x < arguments.length; x++){
        console.log(argument[x]); // argument代表所有参数的数组
    }
    if (x>= 0 ){
        return x;
    }else {
        return -x;
    }
} 
```



rest参数

rest是获取已经定义参数外剩余的参数

``` js
function abc(a,b,...rest){
    console.log('a=>'+a);
    console.log('b=>'+b);
    console.log(rest);
}
```

![image-20220223134508673](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220223134508673.png)

rest 只能写在最后面，加上 '...'



***



## 变量作用域

在JS中，var定义变量实际是有作用域的。

假设在函数体重恒明，则在函数外不可用

``` js
function qj() {
    var x = 1;
    x = x + 1;
} //x为函数内的局部变量

function qj2() {
    var x = 1;
    x = x + 3;
} 
```



内部函数可以访问外部函数的变量

``` js
function qj() {
    var x = 1;
    function qj2(){
        var y = x + 1;
    }
}
```

如果内部函数变量和外部函数变量重名，由内向外查找，屏蔽掉外部变量。

js 代码变量默认先定义再使用，如果定义放在流程中间或后面，则默认会在前面生成定义

``` js
function qj() {
    var x = 1;// 默认在这里加入 var y;
    x = x + y;
    var y = 'A'; // 在这里 y = 'A'; 赋值
}
```



全局函数

``` js
x = 1;

function f() {
    console.log(x);
}
f(); // 1
console.log(x); // 1
```



全局对象window

``` js
var x = "xxx";
alert(x);
alert(window.x);
```



alert() 这个函数本身也是一个window变量

函数也能进行赋值

``` js
var old_alert = window.alert;
window.alert = function(){};
window.alert(123);// window.alert 失效
window.alert = old_alert; // 恢复
```





**规范**

由于所有的全局变量都会绑定到window上，如果不同的js文件，使用了相同的变量会产生冲突

因此要把自己的代码全部放入自己的唯一空间名字中

``` js
var Jerrvis{};
Jerrvis.name = 'Lafit';
Jerrvis.num = 1445235;
```



局部作用域 let

``` js
function() {
    for (var i = 0; i < 100; i++){
        console.log(i);
    }
    console.log(i) // 此时能够打印成功
}
```

如果使用 let关键字，则能解决局部作用域冲突的问题。



**常量**

在ES6 之前使用大写字母定义常量。

爱ES6中引入了常量关键字，const

``` js
const PI = 3.14;
console.log(PI);
PI = 3; //这里返回错误 该变量只读
```





***



## 方法

方法就是把函数放在对象里面，对象还有两个东西，属性和方法

``` js
var Jerrvis = {
      name : 'Jerrvis',
      birth : 1998,
      age: function(){
        var now = new Date().getFullYear();
        return now - this.birth;
      }
    }

Jerrvis.age() // 能调用 this
fu = Jerrvis.age;//不能通过赋值调用 this
```



但可以通过apply控制指向，如下Lafit 由window指向 Jerrvis

``` js
Lafit = Jerrvis.age;
Lafit.apply(Jerrvis,[])
```







***



## 常见对象

使用typeof 能查询对象类型

``` js
typeof 123124
"number"
typeof []
"object"
typeof 'sfasg'
"string"
typeof NaN
"number"
typeof true
"boolean"
typeof Jerrvis.age
"function"
```





### Date

``` javascript
var now = new Date();
now.getFullYear; // 年
now.getMonth(); // 月
now.getDate(); // 日
now.getDay(); // 星期几
now.getHours(); // 时间
now.getMinutes(); // 分钟
now.getSeconds(); // 秒
now.getTime(); // 时间戳

now.toLocalString(); // 本地时间

console.log(new Date(1645682033417));//时间戳转换
console.log(now);
//VM282:1 Thu Feb 24 2022 13:53:53 GMT+0800 (中國標準時間)
```





### Json

早期所有的数据传输习惯使用XML

* Json是一种轻量级数据交换格式

* 简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。 

* 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。



在JavaScript 一切结尾对象，任何JS支持的类型都可以用 Json来表示

格式

* 对象都用 {}
* 数组都用 []
* 所有键值对 用key:value

JSON和JS的转化

``` js
var ship = {
            class:"Bensen",
            age: 10,
            name: 'Lafit',
            level:100
        };

var shipjs = JSON.stringify(ship);
var shipparse = JSON.parse(shipjs);

ship
{class: "Bensen", age: 10, name: "Lafit", level: 100}
shipjs
"{\"class\":\"Bensen\",\"age\":10,\"name\":\"Lafit\",\"level\":100}"
shipparse
{class: "Bensen", age: 10, name: "Lafit", level: 100}
```



JSON和JS对象区别

``` json
var ship = {class: "Bensen", age: 10, name: "Lafit", level: 100};
var ship = "{\"class\":\"Bensen\",\"age\":10,\"name\":\"Lafit\",\"level\":100}"
```



### Ajax

* 原生的JS写法 xhr 异步请求

* jQuey 封装好的方法$("#name").ajax("")
* axios 请求 



***



## 面向对象

类 ： 模板

对象：具体的实例

``` js
var ship = {
      class:"None",
      age: 0,
      name: 'None',
      level:1,
      study: function(){
        this.level = this.level + 1;
      }
    };

    var Lafit = {
      class:"Bensen",
      age:10,
    };
    Lafit.__proto__ = ship;//对象指向ship 相当于继承
```





ES6之前定义学生类并继承方法

``` javascript
function ship(name){
    this.name = name;
}
ship.prototype.hello = function(){//新增一个方法
    alert('Hello');
}
```



ES6之后

``` js
class ship{
    constructor(name){
        this.name = name;
    }
    hello(){
        alert('Hello')
    }
}
```





``` js
class ship {
      constructor(name) {
        this.name = name;
        this.level = 1;
        this.class;
      }

        hello(){
          alert('Hello')
        }
        study(){
          this.level = this.level + 1;
        }
      
    }

    var Lafit = new ship('Lafit');
```



``` js
Lafit.level
1
Lafit.study()
undefined
Lafit.level
2
```





### 继承

如下为destroyer 继承 ship

``` js
class ship {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.class;
  }

  hello(){
    alert('Hello')
  }
  study(){
    this.level = this.level + 1;
  }

}

class destroyer extends ship{
  constructor(name){
    super(name); //实现父类构造
    this.shipType = 'Destroyer';

  }

  Lei() {
    alert("发射鱼雷");
  }
}
var Lafit = new destroyer('Lafit');
```





### 操作BOM对象

BOM：浏览器对象模型



浏览器

有内核浏览器

* IE6~11
* Chrome
* Safari
* FireFox



第三方浏览器

* QQ浏览器

* 360卢兰奇



#### window

window代表浏览器窗口

``` js
window.alert(1)

window.innerHeight
window.outerHeight 
window.innerWidth
window.outerWidth
//获取浏览器窗口大小
```



#### navigator

Navigator,封装了浏览器信息

``` js
navigator.userAgent
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
navigator.appVersion
"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
navigator.appName
"Netscape"
navigator.platform
"Win32"
```

大多数时候我们都不建议使用 navigator 对象，因为会被人为修改。

不建议使用这些属性来判断和编写代码



#### screen

代表屏幕尺寸

``` js
screen.width
1920
screen.height
1080
```



#### location

location代表当前页面url信息

``` js
location
ancestorOrigins: DOMStringList {length: 0}
assign: ƒ assign('www.jerrvis.com') //添加要跳转的往回走哪
hash: ""
host: "www.baidu.com"
hostname: "www.baidu.com"
href: "https://www.baidu.com/"
origin: "https://www.baidu.com"
pathname: "/"
port: ""
protocol: "https:"
reload: ƒ reload() //刷新网站
replace: ƒ replace() 
search: ""
toString: ƒ toString()
valueOf: ƒ valueOf()
Symbol(Symbol.toPrimitive): undefined
__proto__: Location
```



#### document

document代表当前的页面，HTML DOM文档树

``` js
document.title
"百度一下，你就知道"
document.title = 'Lafit is my wife'
"Lafit is my wife"
```

document 可以获取具体的文档树节点

``` js
<dl id="app">
    <dt>ship</dt>
    <dd>Destroyer</dd>
    <dd>Aircraft</dd>
  </dl>
  <script>
    var dl = document.getElementById('app');
  </script>

```

获取cookie

``` js
document.cookie
```

劫持cookie原理

``` js
<script src"aa.js"></script>
//恶意人员获取cookie 上传到他的服务器
```

服务器端可以设置 cookie:httpOnly



#### history

代表网页的历史记录

``` js
history.back() // 页面前进
history.forward() // 页面后退
```





***



### 操作DOM对象

浏览器网页就是一个DOM树形结构

* 更新DOM节点
* 遍历DOM节点
* 删除DOM节点
* 添加一个新的节点



**获得节点**

要操作一个DOM节点，就必须要先获得这个DOM节点

``` html
<body>
<div id="father">
<h1>标题</h1>
<p id="p1">p1</p>
<p class="p2">p2</p>
</div>

<script>
  // 对应CSS的选择器
  var h1 = document.getElementsByTagName('h1');
  var p1 = document.getElementById("p1");
  var p2 = document.getElementsByClassName("p2");
  var father = document.getElementById("father");

  var children = father.children; // 获取父节点下的所有子节点
  // father.firstChild; 获取第一个子节点
  // father.lastChild; 获取最后一个子节点
</script>
</body>
```



**更新节点**



``` html
<body>
<div id="id1">
</div>

<script>
  var id1 = document.getElementById("id1");
</script>
```



``` js
id1.innerText = '123' // 修改文本的值
id1.innerHTML = '<strong>Lafit is my wife</strong>' // 解析文本标签

id1.style.color = 'red' // 修改颜色
id1.style.fontSize = '20px' // 修改大小

```





**删除节点**

先获取父节点，在通过父节点删除自己

``` html
<body>
<div id="father">
<h1>标题</h1>
<p id="p1">p1</p>
<p class="p2">p2</p>
</div>

<script>
  // 对应CSS的选择器
  var h1 = document.getElementsByTagName('h1');
  var p1 = document.getElementById("p1");
  var p2 = document.getElementsByClassName("p2");
  var father = document.getElementById("father");
</script>
</body>
```



``` js
var father = p1.parentElement;
father.removeChild(p1)
father.remiveChild(father.children[0])
```

删除节点后，其余的子节点的下标会往前移动



**创建和插入节点**

我们获得了某个DOM节点，假设这个DOM节点是空的。我们通过 innerHTMLj就可以增加元素，但是这个DOM节点已经存在元素了，我们就不能这么干，会产生覆盖。



追加

``` js
<body>
<p id="ship">Ship</p>
<div id="list">
  <p class="battle">Battle</p>
  <p class="aircraft">aircraft</p>
  <p class=""></p>
</div>

<script>
  var ship = document.getElementById('ship');
  var sl = document.getElementById('list');
  sl.append(ship);
</script>
</body>
```



创建

``` js
<body>
<p id="ship">Ship</p>
<div id="list">
  <p class="battle">Battle</p>
  <p class="aircraft">Aircraft</p>
  <p class="destory">Destory</p>
</div>

<script>
  var ship = document.getElementById('ship');
  var sl = document.getElementById('list');
  var ne = document.createElement('p'); // 创建一个P标签
  ne.class = 'cruser'; // 赋值
  ne.innerText = "Cruser"; //内容
  sl.append(ne);
	//获取body会返回一个列表
  var body = document.getElementsByTagName('body');
  body[0].style.background = 'pink';

</script>
</body>
```



***



### 操作表单

* 文本框 text
* 下拉框 <select>
* 单选框 radio
* 多选框 checkbox
* 隐藏域 hidden
* 密码框 password
* ......



``` html
<body>
  <form action="post">
    <p>
      <span>用户名:</span><input type="text" id="username">
    </p>
    <p>
      <input type="radio" name="sex" value="man">男
      <input type="radio" name="sex" value="women">女
    </p>
  </form>
  <script>
    var inp_text = document.getElementById('username');
  // 得到输入框的值
    var by = document.getElementById('boy')
    var gr = document.getElementById('girl')
  </script>
</body>
```

![image-20220228135357931](C:\Users\H1g0r\AppData\Roaming\Typora\typora-user-images\image-20220228135357931.png)

``` js
inp_text.value // 得到输入框的值
"Lafit"
inp_text.value = 'Shoukaku' // 修改输入框的值
'Shoukaku'
gr.checked // 查看是否被选中
false
gr.checked = true //选择女
true
```





**提交表单 md5加密**

``` html
<body>
  <!-- 表单绑定一个检测提交函数 true false
  表单接受结果返回给 表单的onsubmit -->
  <form action="https://www.baidu.com" method="post" onsubmit="return aaa()">
    <p>
      <span>用户名:</span><input type="text" id="username" name="username">
    </p>
    <p>
      <span>密码:</span><input type="password" id="input-password"> 
    </p>
    <input type="hidden" id="md5-password" name="password">
    <p>
      <input type="radio" name="sex" value="man" id="boy">男
      <input type="radio" name="sex" value="women" id="girl">女
    </p>
    <!-- 点击触发 -->
    <button type="submit" onclick="aaa">提交</button>
    
  </form>
<script>
  function aaa(){
    var uname = document.getElementById('username');
    var pwd = document.getElementById('input-password');
    var md5pwd = document.getElementById('md5-password');
    console.log(uname.value);
    console.log(pwd.value);
    md5pwd.value = md5(pwd.value);

    return true;//可以校验判断表单内容
  }
</script>
</body>
```





***



## jQuery

jQuery库，里面存在大量的javascripy函数



**在线CDN引入**

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
    
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
</head>
<body>
  
</body>
</html>
```



**本地导入**

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./lib/jquery-3.6.0.js"></script>
</head>
<body>
  
</body>
</html>
```



**基本公式**

jQuery 公式 
    **$(selector).action()**

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./lib/jquery-3.6.0.js"></script>
</head>
<body>
  <!-- jQuery 公式 
    $(selector).action() -->
<a href="" id="test-jquery">点我</a>

<script>
  document.getElementById('id');
  $('#test-jquery').click(function(){
    alert('hello,jquery');
  })
</script>
</body>
</html>
```



### 选择器

``` js
$('p').click()； // 标签选择器
$('id1').click()； // ID选择器
$('.class1').click()； // 类选择器
$('p').click()
```



### 事件

如下为鼠标坐标实时获取

``` html
  <style>
    #divMove{
      width: 500px;
      height: 500px;
      border: 1px solid red;

    }
  </style>
</head>
<body>
mouse:<span id="mouseLocation"></span>
<div id="divMove"></div>
<script>
  //加载完毕后响应事件
  $(function(){
    $('#divMove').mousemove(function(e){
      $('#mouseLocation').text('X:'+e.pageX+ 'Y:'+e.pageY)
    })
  });
</script>
</body>
```





### 操作DOM



``` html
  <script src="./lib/jquery-3.6.0.js"></script>
</head>
<body>

<ul id="ship">
  <li id="destoryer">Destoryer</li>
  <li id="cruser" name="Kron">Cruser</li>
</ul>

<script>
  $('#ship li[id=destoryer]').text();
  $('#ship li[name=Kron]').text();
</script>
</body>
```

**节点文本操作**

``` js
$('#ship li[name=Kron]').text(); // 获得值
"Cruser"
$('#ship li[name=Kron]').html('<strong>Kron</strong>'); // 设置值
jQuery.fn.init [li#cruser, prevObject: jQuery.fn.init(1)]
$('#ship li[id=destoryer]').text(); // 获得值
"Destoryer"
$('#ship li[id=destoryer]').text('Lafit'); // 设置值
jQuery.fn.init [li#destoryer, prevObject: jQuery.fn.init(1)] 
```



**CSS操作**

``` js
  $('#ship li[id=destoryer]').css({'color':'red'});
  $('#ship li[name=Kron]').css('text-decoration','underline');
```



元素显示和隐藏：本质 display:none;

``` js
  $('#ship li[id=destoryer]').show();
  $('#ship li[name=Kron]').hide();
```



测试

``` js
$(window).width()
$(window).height()
```

