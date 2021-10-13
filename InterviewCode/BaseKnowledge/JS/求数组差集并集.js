// 利用filter函数来求两个数组的交集
let a = [1, 2, 3, 4, 5, 6];
let b = [2, 4, 6, 8, 10];

// 交集
let c = a.filter((item) => {return b.indexOf(item, 0) !== -1})
console.log(c);

// 差集, a有 b没有
let d = a.filter((item) => {return b.indexOf(item) === -1})
console.log(d);

// 并集
let f = a.concat(b.filter((item) => {return a.indexOf(item) === -1}))
console.log(f);

// 补集 a中存在b不存在加上 b存在a不存在
let g = a.filter(item => {return b.indexOf(item) === -1}).concat(b.filter(item => {return a.indexOf(item) === -1}));
console.log(g);
