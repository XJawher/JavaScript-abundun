/*变量类型
1 值类型和引用类型*/
var a = 100
var b = a
a = 200
console.log(b)//100


/*引用类型*/

var c = {age:21}
var d = c
d.age = 22
d.peo = "xianc"
d.arr = ['2','3','5',9,7,65,5]
console.log(c)//22

/*typeof*/

console.log(typeof undefined)
console.log(typeof 'acb')
console.log(typeof 123)
console.log(typeof false)
console.log(typeof [1,12])
console.log(typeof {a:12})
console.log(typeof null)
console.log(typeof console.log)


