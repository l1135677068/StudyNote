// 手写promise.all函数
all = function (iterator) {
    // 记录成功的个数
    let count = 0;
    let len = iterator.length;
    let result = [];
    return new Promise((resolve, reject) => {
        // 遍历iterator中所有的item
        for (let item of iterator) {
            Promise.resolve(item)
                .then((data) => {
                    result[count] = data;
                    if (++ count === len) {
                        // 如果成功的个数等于参数的长度，则resolve出去
                        resolve(result);
                    }
                })
                .catch((e) => {
                    // 只要有一个reject就reject出去
                    reject(e);
                })
        }
    })
}
var promise1 = Promise.resolve(3);

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});
var promise3 = 42;

all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
}).catch(() => {
    console.log("失败了")
})
