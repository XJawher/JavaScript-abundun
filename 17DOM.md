## DOM
DOM 就是 Document Operation Model  文档操作模型  
DOM 的本质是一个节点树，结构化的，能让 JS 可识别具有可操作性的文档模型。  
DOM 节点操作就是以 document.getElementById 这种为类型的浏览器的 api 操作   
DOM 结构操作有：    
新增节点-有两种方法，一个是      

		var div1 = document.getElementById('div1')
		// add new node 
		var p1 = document.createElement('p')
		p.innerHTML = 'this is p '
		//移动新的节点
		var p2 = document.getElementById('p2')
		div1.appendChild(p2)  
获取父子元素

	var div1 = document.getElementById('div1') 
	var parent = div1.parentElement
	
	var child = div1.childNodes
删除节点

    div1.removeChild(child[0])