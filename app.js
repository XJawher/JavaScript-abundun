/*变量类型
1 值类型和引用类型*/
// var a = 100
// var b = a
// a = 200
// console.log(b)//100


// /*引用类型*/

// var c = {age:21}
// var d = c
// d.age = 22
// d.peo = "xianc"
// d.arr = ['2','3','5',9,7,65,5]
// console.log(c)//22

// /*typeof*/

// console.log(typeof undefined)
// console.log(typeof 'acb')
// console.log(typeof 123)
// console.log(typeof false)
// console.log(typeof [1,12])
// console.log(typeof {a:12})
// console.log(typeof null)
// console.log(typeof console.log)

/*变量计算     
强制类型的转换             
字符串拼接     
== 运算符     
if语句     
逻辑运算  */
/*变量计算*/
var aa = 100 +10
console.log('aa='+aa)

/*字符串拼接*/
var bb = 100 + '10'
console.log('bb='+bb)

/*== 运算符 */
console.log(100 == '100')
console.log(0 == '')
console.log(null == undefined)

/*if语句 */
var a = true
if (a) {
  console.log('true')
}else{
  console.log('false')
}//true
var b = 100
if (b) {
  console.log('true')
}else{
  console.log('false')
}//true
var c = ''
if (c) {
  console.log('true')
}else{
  console.log('false')
}//false

/*逻辑运算*/
console.log(10 && 0)//0
console.log('' || '123')//"123"
console.log(!window.ss)//true

var a = 100

console.log(!!a)















