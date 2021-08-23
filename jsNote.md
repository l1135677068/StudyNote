[toc]

### js的基础知识

#### 数据类型

##### 基本数据类型 Number String Boolean Undefined Null

​	String可以用""或者''定义，c++中""定义字符串''定义字符

​	字符串中的常用方法: concat()拼接字符串 substring() indexof() 返回子串的位置 match() 匹配正则表达式

##### Object(Array, Function)

###### 数组的常用方法

​	添加元素 push, unshift,

​	删除元素 pop, shift

​	每个元素调用回调函数 map,  find

​	在原数组上生成新数组 concat, join,

​	特殊方法splice, slice, sort

### 基础知识

#### var和let的异同

let关键字不允许在相同作用域，重复声明同一变量

#### 暂时性死区

本质就是只要一进入当前作用域，变量就已经存在，在执行到声明该变量的那一行代码前，均不可使用该变量

### ES6和ES5的区别

#### ES6引入了let和const关键字

1 ES6允许在块级作用域内声明函数类似于let，且在支持ES6的浏览器中可以有自己的规则(块级作用域内声明函数类似var，会被提升到全局作用域或函数头部作用域) **由于不同浏览器的行为方式不同，因此避免在块级作用域内声明函数，如果必须建议使用函数表达式** 

```javascript
{let a = "js";
  //函数表达式
	let f = function() {
	return a;
	}
}
```



2 const的本质是**变量所指向的内存地址中保存的那个值不可变**

3 