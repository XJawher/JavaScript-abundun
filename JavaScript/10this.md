## this 
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**      
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**     
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**    
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**     
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**     
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**     
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**     
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**        
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**           
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**            
**要在执行的时候才能确定值，在定义的时候是无法确认值的。**    

	var  a = {
	  name:'A',
	  fn:function () {
	    console.log(this.name)
	  }
	}
	
	a.fn()// this === a 
	a.fn.call({name:'B'})//this === {name:'B'}
	var fn1 = a.fn 
	fn1() //this === window  
1> 作为构造函数执行   
2> 作为对象属性执行   
3> 作为普通函数执行   
4> call apply bind   

	/*1>作为构造函数执行*/
	
	function Foo(name,age) {
	  this.name = name
	  this.age = age
	  console.log(this.name)
	}
	
	var f = new Foo('lisi',20)
	console.log(f)
	
	/*2>作为对象属性执行*/
	var obj = {
	  name:'A',
	  printName : function () {
	    console.log(this.name)    
	  }
	}
	obj.printName()
	/*3>作为普通函数执行*/
	function fn3(argument) {
	
	  console.log(argument)
	  console.log(this)
	}
	 fn3()//this ===  window
	
	
	/*4>call apply bind*/
	function fn3(argument) {
	
	  console.log(argument)
	  console.log(this)
	}
	fn3.call('1','zhangsan')//this ===  [String: '1']
使用 **`call`** 的时候，this 就会指向它传入的第一个 对象，不管是什么类型的。   
	
	/*bind 必须是函数表达式而不是函数声明*/
	 var fn4 = function (argument) {
	
	  console.log(argument)
	  console.log(this)
	}.bind({a:100})
	
	fn4('lilili')	 
	lilili
	{ a: 100 }
         