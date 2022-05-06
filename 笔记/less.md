# Less



## less的编译

大部分的ide都支持less编译

vscode 可以使用 easyless





## less中的注释

以//开头的注释，不会被编译到css文件中

以/**/包裹的注释，会被编译到css文件中



## less中的变量

使用@来声明一个变量：@pink:pink;

1. 作为普通属性值来使用：直接使用@pink
2. 作为选择器和属性名：#@{selector的值}的形式
3. 作为url:@{url}
4. 变量的延迟加载



## less中的嵌套规则

1. 基本的嵌套规则
2. &的使用



## less中的混合

