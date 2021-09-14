[toc]

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

