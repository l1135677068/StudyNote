let name = "小王";
age = 19;
var obj = {
    name: "小张",
    fun: function () {
        console.log(this.name + " " + this.age);
    }
}
function printt() {
    console.log(age);
}
var db = {
    name: "fsdl",
    age: 20
}
obj.fun.call(db);

const a = 12;
