// 函数和其周围状态的捆绑
name = "mike";
function closure() {
    let name = "fjsdk";
    return function () {
        console.log(name);
    }
}
let fun = closure();
fun();
// fun保存了对外部的引用
