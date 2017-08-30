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
// var aa = 100 +10
// console.log('aa='+aa)

// /*字符串拼接*/
// var bb = 100 + '10'
// console.log('bb='+bb)

// /*== 运算符 */
// console.log(100 == '100')
// console.log(0 == '')
// console.log(null == undefined)

// /*if语句 */
// var a = true
// if (a) {
//   console.log('true')
// }else{
//   console.log('false')
// }//true
// var b = 100
// if (b) {
//   console.log('true')
// }else{
//   console.log('false')
// }//true
// var c = ''
// if (c) {
//   console.log('true')
// }else{
//   console.log('false')
// }//false

// /*逻辑运算*/
// console.log(10 && 0)//0
// console.log('' || '123')//"123"
// console.log(!window.ss)//true

// var a = 100

// console.log(!!a)

/*原型和原型链*/
/*1问：怎么准确判断一个变量是数组类型*/

/*2问：写一个原型链的继承的例子*/
/*3问：描 new 一个对象的过程*/
/*4问：zepto 或者其他框架源码中如何使用原型链*/

/*构造函数*/
// function Foo(age,name) {
//   this.age = age
//   this.name = name
//   this.class = 'class-1'
//   //return this //默认有这一行
// }

// var f = new Foo('zhangsan',20)
// var f1 = new Foo('lisi',22)

// console.log(f)
// console.log(f1)

// Foo { age: 'zhangsan', name: 20, class: 'class-1' }
// Foo { age: 'lisi', name: 22, class: 'class-1' }


// var obj = {};obj.a = 100
// var arr = [];arr.a = 100,arr.b = 100,arr.c = 100

// function fn() {}
// fn.a = 100
// console.log(obj.__proto__)
// console.log(arr.__proto__)
// console.log(arr)
// console.log(fn.__proto__)
// console.log(fn.prototype)
// console.log(obj.__proto__ === Object.prototype)
// {}
// []
// [Function]
// fn {}
// true

// function Foo(name) {
//   this.name = name
// }

// Foo.prototype.age = function () {
//   console.log(this.name)
// }

// var f = new Foo('lisi')

// f.name = function () {
//   console.log(this.name)
// }

// f.name()
// f.age()

// var item 
// for (item in f ) {
//   if (f.hasOwnProperty(item)) {
//     console.log(item)
//   }
// }


/*写一个原型链继承的例子*/

// function Elem(id) {
//   this.elem = document.getElementById(id);
// }

// Elem.prototype.html = function (val) {
//   var elem = this.elem
//   if (val) {
//     elem.innerHTML = val
//     return this
//   }else{
//     return elem.innerHTML
//   } 
// }

// Elem.prototype.on = function (type,fn) {
//   var elem = this.elem
//   elem.addEventListener(type,fn)
// }
// var div1 = new Elem('J_SearchTab')


// // console.log(div1.html())
// div1.html('<p>nihai</p>')
// div1.on('click',function () {
//   alert('click')
// })


/*作用域和作用域提升*/

// console.log(a)
// var a = 100

// fn('lisi')
// function fn(argument) {
//   age = 22
//   console.log(argument,age)
//   var age
// }

/*this*/
// var  a = {
//   name:'A',
//   fn:function () {
//     console.log(this.name)
//   }
// }

// a.fn()// this === a 
// a.fn.call({name:'B'})//this === {name:'B'}
// var fn1 = a.fn 
// fn1() //this === window








/*1>作为构造函数执行*/

// function Foo(name,age) {
//   this.name = name
//   this.age = age
//   console.log(this.name)
// }

// var f = new Foo('lisi',20)
// console.log(f)

// /*2>作为对象属性执行*/
// var obj = {
//   name:'A',
//   printName : function () {
//     console.log(this.name)    
//   }
// }
// obj.printName()
// /*3>作为普通函数执行*/
// function fn3(argument) {

//   console.log(argument)
//   console.log(this)
// }
// // fn3()//this ===  window


// /*4>call apply bind*/
// fn3.call('1','zhangsan')

// /*bind 必须是函数表达式而不是函数声明*/
//  var fn4 = function (argument) {

//   console.log(argument)
//   console.log(this)
// }.bind({a:100})

// fn4('lilili')
/*作用域链*/


var a = 100
function f1() {
  var b = 200
  function f2(){
    var c = 300
    console.log(a)
    console.log(b)
    console.log(c)
  }
  f2()
}

f1()












