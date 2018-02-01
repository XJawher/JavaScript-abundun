## 手写一个 Ajax    
这一块的要求就是手写一个 Ajax ,不是说用 JQ 是怎么实现的之类的.
## XMLHttpReuest    
不管是怎么实现 AJax,这个 XMLHttpReuest 是无法绕过去的一个坎.     

	var xhr = new XMLHttpRequest()
	xhr.open("GET","/api",false)    
	xhr.onreadystatechange = funcion () {
	  if (xhr.readyState == 4){
		if (xhr.status == 200){
		  alert("Ajax")
		}
	  }
	}
	xhr.send(null)