// 判断执行结果
async function foo() {
    console.log('foo')
}
async function bar() {
    console.log('bar start')
    // 这里foo已经执行完成了，且返回给主协程一个promise对象
    await foo()
    console.log('bar end')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
bar();
new Promise(function (resolve) {
    console.log('promise executor')
    resolve();
}).then(function () {
    console.log('promise then')
})
console.log('script end')
// script start
// bar start
// foo
// promise executor
// script end
// bar end
// promise then
// setTimeout
