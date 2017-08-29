## typeof 
typeof 可以区分出 undefined string number Boolean 这四个是值类型的详细类型，但是他不能区分引用类型的对象。数组 对象 函数 以及比较特殊的 null   

	console.log(typeof undefined)
	console.log(typeof 'acb')
	console.log(typeof 123)
	console.log(typeof false)
	console.log(typeof [1,12])
	console.log(typeof {a:12})
	console.log(typeof null)
	console.log(typeof console.log())
	 
	undefined
	string
	number
	boolean
	object
	object
	object
