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


// var a = 100
// function f1() {
//   var b = 200
//   function f2(){
//     var c = 300
//     console.log(a)
//     console.log(b)
//     console.log(c)
//   }
//   f2()
// }

// f1()

/*闭包*/
/*1>函数作为返回值*/
// function F1() {
//   var a = 100

//   return function (){
//     console.log(a)
//   }/*1>函数作为返回值*/
// }

// var f1 = F1()
// var a = 200
// f1()

// /*2>函数作为参数传递*/

// function F1() {
//   var a = 100

//   return function (){
//     console.log(a)
//   }
// }

// var f1 = F1()

// /*2>函数作为参数传递*/
// function F2(fn) {
//   var a = 200
//   fn()
// }
// F2(f1)

/*创建 10 个 a 标签，点击的时候弹出相应的序号*/
/*错误的写法*/
// var i , a 
// for (var i = 0; i < 10; i++) {
//   a = document.createElement('a')
//   a.innerHTML = i + '<br>'
//   a.addEventListener('click',function (e) {
//     e.preventDefault()
//     alert(i)
//   })
// }
// document.body.appendChild(a)

/*错误分析
在上面的代码中，由于 i 是一个自由变量，在执行的时候
会去他的父级作用域找，这时候发现 i 的值在父级
作用域中已经是 10 了 所以我们点击的时候所拿到de
值一直就是 10，他无法传递 123
*/
/*正确的做法，加一闭包*/
// var i 
// for (var i = 0; i < 10; i++) {
//   (function (i) {
//     a = document.createElement('a')
//     a.innerHTML = i + '<br>'
//     a.addEventListener('click',function (e) {
//       e.preventDefault()
//       alert(i)
//     })
//     document.body.appendChild(a)
//   })(i)  
// }

// function firstLoad() {
//   var _list = []
//   return function (id){
//     if (_list.indexOf(id) >= 0) {
//       return false
//     } else {
//       _list.push(id)
//       return true
//     }
//   }
// }

// var _firstLoad = firstLoad()
// _firstLoad(10)
// _firstLoad(20)
// _firstLoad(10)

/*## 异步和单线程*/
// console.log(100)
// setTimeOut( function() {
//   console.log(200)
// })
// console.log(300)

// console.log('start')
// $.get('./data.json',function (data) {
//   console.log(data)
// })
// console.log('end')

/*日期 */
// console.log(Date.now())//
// var dt = new Date()
// console.log(dt.getTime())
// console.log(dt.getFullYear())
// console.log(dt.getMonth())
// console.log(dt.getDate())
// console.log(dt.getHours())
// console.log(dt.getMinutes())
// console.log(dt.getSeconds())

/*Math*/
/*随机数*/

//var M = Math.random()/*返回的是一个 0-1 之间的数*/
//console.log(M)/*很大的一个用途就是清除缓存用*/
/*数组 api*/
/*forEach 遍历所有的元素*/
// var arr1 = [1,2,3]
// arr1.forEach(function (item,index) {
//   console.log('forEach')
//   console.log(index,item)
// })

/*every 判断所有元素是否都符合条件*/
// var arr2 = [1,2,6]

//  var result = arr2.every(function (item,index) {
//   if (item < 4) {
//     return true
//   }
//   console.log('every')
//   console.log(index,item)
// })
//  console.log(result)
// /*some 判断至少有一个元素符合要求*/
// var arr3 = [1,2,6]

//  var result = arr3.some(function (item,index) {
//   if (item < 4) {
//     return true
//   }
//   console.log('some')
//   console.log(index,item)
// })
//  console.log(result)
// sort 排序
// var arr4 = [1,5,1.5,1.1,61,5,54,71,9] 
// var arr5 = arr4.sort(function (a,b) {
//   //从大到小
//   return a - b 
//   //从小到大
// })
// console.log(arr5)




// /*map 对元素重新组装，生成新数组*/
// var arr6 = arr5.map(function (item,index) {
//   return '' + item + ''
// })
// console.log(arr6)
// /*filter 过滤符合条件的元素*/
// var arr7 = arr5.filter(function(item,index) {
//   if (item >= 2) {
//     return true
//   } 
// })
// console.log(arr7)

/*对象 api for in */

/*写一个能遍历对象和数组的 forEach 函数，这里的思路是先做判断，然后循环*/

/*function forEach (obj,fn){
  var key 
  if (obj instanceof Array) {
    obj.forEach(function(index,item) {
      fn(index,item)
    })
  }else {
    for (key in obj) {
      fn(key,obj[key])
    }
  }
}

var arr = [1,2,3]
forEach(arr,function (index,item){
  console.log(index,item)
})


var obj = {a:[1,2,3],b:'123'}
forEach(obj,function (key,value){
  console.log('key,value')
  console.log(key,value)
})
*/

/*编写一个通用的事件监听函数*/
// var btn = document.getElementById('btn1')
// btn.a.addEventListener('click',function (event) {
//   console.log('click')
// })
// function bindEvent(elem,type,fn) {
//   elem.addEventListener(type,fn)
// }
// var a = document.getElementById('link1')
// bindEvent(a,'click',function () {
//   e.preventDefault()//这个存在就是阻止默认的行为，
//   console.log('bindEvent click')
// })
/*e.preventDefault()//这个存在就是阻止默认的行为，
因为是 a 标签，它存在一个点击以后跳转的现象，所以这里
加入一个 e.preventDefault() 阻止他跳走，让他先
打印，打印完毕再跳走



*/

var xhr = new XMLHttpRequest()
xhr.open('GET','url',false)//false 异步执行
xhr.onreadystatecode = function (){//状态变化是函数触发
  if (xhr.readyState == 4) {//xhr.readyState 说明已经完成了
    if (xhr.staus == 200) {//终端返回码就是OK
      alert(xhr.responseText)
    }
  }
}
xhr.send(null)

/*IE 兼容性的问题 IE 的低版本使用的是 ActiveObject
和 W3C 标准不一样


*/























