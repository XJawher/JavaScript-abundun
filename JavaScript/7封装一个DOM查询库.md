## 封装查询库  

	function Elem(id) {
	  this.elem = document.getElementById(id);
	}
	
	Elem.prototype.html = function (val) {
	  var elem = this.elem
	  if (val) {
	    elem.innerHTML = val
	    return this
	  }else{
	    return elem.innerHTML
	  } 
	}
	
	Elem.prototype.on = function (type,fn) {
	  var elem = this.elem
	  elem.addEventListener(type,fn)
	}
	var div1 = new Elem('J_SearchTab')
	
	
	// console.log(div1.html())
	div1.html('<p>nihai</p>')
	div1.on('click',function () {
	  alert('click')
	})  
