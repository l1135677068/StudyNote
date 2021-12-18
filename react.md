[toc]

### super的作用

子类没有this，super就是用来继承父类的this的

## 如何快速获得更新了的state

如果按照abc都对state修改且加一，state初始为0，传递对象的话abc读取的state都为0;

传递函数的话b可以读取a执行之后的更新了的state.c也可以。

在setstate中传递一个函数而不是对象，传递函数的话可以保证当前获取的state是基于前一个时刻改变了后的state，

如果传递对象的话，查询到的均是渲染前的state，而不是

## setState

1 批量更新 16以前，只有在react事件处理器内部才默认批量，17及以后均批量更新

2 对于相同的state的key，只保留最近的那个

3 按调用setState的顺序更新state

4 异步的

5 [参考](https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973)

## hook

### 背景

1 无法复用状态逻辑

2 复杂组件变的难以理解

3 class组件难以理解

### 好处

1 可以在函数组件中使用state

2 减小代码量

### 组成

#### useState

```js
const [count setCount] = useState(0)
```

上面这段代码是声明了一个count state和改变count的函数setCount，0是count的初值。useState调用hook，返回两个值，第一个值是成为state的变量，第二个是改变该state的函数; 只需要在setCount()的参数中返回对应的值，即可改变对应的state，比如setCount(1 + 2),那么count的值就变为3

#### useEffect()

useEffect实际上等于class中生命周期函数update() ,mount(), unmount()的组合，当dom挂载或者更新的时候useEffect()就会被调用，通过在参数中返回一个函数，代表页面卸载的时候调用,比如

```js
useEffect(() => {
return console.log("2")
})
```

代表页面卸载的时候打印2

#### 优化

可以在useEffect(()=>{}, para)指定para的值，如果该值没有变化那么次useEffect()便不会执行。

### 参考

[hook使用](https://zh-hans.reactjs.org/docs/hooks-effect.html)

## ref

### 背景

通过ref可以获得元素的引用或者组件实例的引用

### 方法

1 创建ref。2 元素或者组件设置对应的ref属性 3 通过ref.current获得引用

