[toc]

### 第四五六章 文本图像链接

​	GIF PNG JPEG

​	a标签的href属性的值可以是另一个网站，锚点，可下载的文件

一个页面不需要有太多的缩略图，会造成页面渲染过慢

### 第七章CSS构造块

​	选择器 + 声明块

​	/\*....\*/注释

​	继承，子元素会继承父元素的部分可继承的属性

​	当对同一个元素应用不同的样式规则的时候，根据**特殊性(id最特殊)**和**顺序性**来判断应用哪一个规则

​	属性的值可以有哪些 1 inherit(继承的) 2

预定义的 3 长度(em px)和百分数 4纯数字

5 URL 6 CSS颜色

### 第八章操作样式表

​	三种方法 1 外部样式表 通过在head中使用link元素引入 2嵌入样式表 html文件head标签中使用style元素 3 内联样式表 直接在元素的标签中设定属性值

### 第九章定义选择器

​	1 使用名称 h{} 2 使用类名 .类名{} 3 使用id #id{} 4 选择器 + 组合符(空格 > + ~) 5 伪类选择器 6 伪元素选择器 7状态连接选择器 8 按属性选择元素

### 第十章 CSS布局

​	1 html和css文件分离 2 固定布局和响应式布局

​	2 盒模型, 通常CSS里设置的宽度为盒子中内容的宽度，浏览器中要显示的宽度=内容宽度+左右内边距+左右边框宽度,如果设置box-sizing:border-box, 则一样

​	3 display:block(inline),将行内(块级)元素转化为块级(行内)元素

​	4 只有块级元素才能设置宽高

​	5 让设置了宽度的元素浮动就能表现出文字在图像周围显示的效果, **浮动的元素不属于文档流的一部分**

​	5 **清除浮动**

​	6 **相对定位是相对于元素的初始位置，仍然占据空间；绝对定位是相对于最近的已定位的祖先元素。不占据空间**

​	7 可伸缩图像 省略width和height，max-width 100% height: auto

​	8 父相子绝

​	9想让一个网站适应不同的屏幕，可以用媒体查询

#### Grid布局

使用display:grid表明网格布局

容器： 可以规定行，列(grid-template-row(column)), 可以划分区域grid-template-area

Justify(align)-content标明内容区域在容器内的水平(垂直)位置,简写为place-content

项目:

规定属于哪个格子 grid-row(column): start/end

Grid-area规定属于哪个区域 

Place-self是align-self和justify-self的简写

#### Flex布局

设置display为flex

容器：flex-direction, flex-wrap, justify-content, align-item(在交叉轴的对齐方式),

项目:order, flex-grow, flex-shrink, flex-basis,flex(前三者的简写).



### 十三章 使用web字体

### 十四章 CSS3

#### 生成内容，使用伪元素::before

### 基础知识

#### 块内元素和行内元素的区别

​	1 块内元素占一行，垂直排列；行内元素不占一行，水平排列

​	2 块内元素可以包含行内，行内不能包括块内元素。

​	3 行内元素设置width height padding等属性无效

​	4常用的块内元素有 p, h, div,ul, li

​	5常用的行内元素有a img span input span

#### em和rem

em用作字体大小的时候，是相对于父元素的。比如父元素是16px，子元素是2em，那么子元素的字体大小就是32px;

rem作用于根元素的时候，相对于16px；作用于非根元素的时候，相对于根元素的字体大小。

#### z-index的总结

1 z-index只有在position为absolute relative fixed的时候有用

2 同级比较，当子元素和父元素的兄弟元素层叠的时候，父元素和其兄弟元素的zindex值决定了层叠顺序，除非父元素为auto的时候才用自身的z-index值去比较。

#### 响应式布局和弹性布局

响应式布局主要是为了适配不同的屏幕，而弹性布局更加灵活。 

### CSS小技巧

​	1 当有多个相同的容器的时候，要对被选中的容器显示不同的样式，可以利用点击事件增加额外类名，再在css中对这样的类名增加样式。

​	2 写css属性的顺序

 ![image-20210826202214772](/Users/luohanxiong/Library/Application Support/typora-user-images/image-20210826202214772.png)

 	3 水平的一般为justify，垂直的一般为align

​	4 一般可用列表少用br;img可用div包起来先定好布局，在定好全局样式，最后再调整细小样式

