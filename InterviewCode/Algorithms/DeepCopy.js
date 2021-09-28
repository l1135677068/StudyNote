// 深拷贝 主要思想：对于拷贝对象的每一个属性，保持基本数据类型的赋值
function deepCopy (target) {
    if (typeof target === 'object') {
        // 判断是不是数组
        let result = Array.isArray(target) ? [] : {};
        // 赋值每一个属性
        for (const key in target) {
            result[key] = deepCopy(target[key]);
        }
        return result;
    } else  {
        return target;
    }
}

// 可能是循环引用, 对于当前拷贝对象，先从map中读取，如果有则直接取，否则放入map并且赋值
function deepCopySecond(target, map = new Map()) {
    if (typeof target === 'object') {
        let result = Array.isArray(target) ? [] : {};
        // 从当前map读取
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, result);
        for (const key in target) {
            result[key] = deepCopySecond(target[key], map);
        }
        return result;
    } else {
         return target;
    }
}

const objOne = {
    name : "mike",
    language: {
        first: "chinese",
        second: "english"
    },
    data: [1, 2, 3, 5]
}

// let objTwo = deepCopy(objOne);
// objTwo.language.first = "japanese";
// console.log(objTwo);
// console.log(objOne);

// 可能是循环引用
objOne.objOne = objOne;
let objThree = deepCopySecond(objOne);

objThree.language.first = "japanese";
console.log(objThree)
console.log(objOne)
