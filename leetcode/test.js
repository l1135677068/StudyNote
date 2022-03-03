let a = "hello world"

const reverseWords2 = (s) => {
    let temp = s
    temp.replace('hello', "world")
    console.log(temp)
    return temp
}
console.log(reverseWords2(a))
