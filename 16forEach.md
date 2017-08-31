写一个能遍历对象和数组的 forEach 函数，这里的思路是先做判断，然后循环

	function forEach (obj,fn){
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
