## 日期

	console.log(Date.now())//精确毫秒时间
	var dt = new Date()
	console.log(dt.getTime())//精确毫秒时间
	console.log(dt.getFullYear())//年
	console.log(dt.getMonth())//月
	console.log(dt.getDate())//日
	console.log(dt.getHours())//时
	console.log(dt.getMinutes())//分
	console.log(dt.getSeconds())//秒

## Math
	var M = Math.random()/*返回的是一个 0-1 之间的数*/
	console.log(M)/*很大的一个用途就是清除缓存用*/
## 数组 API
	/*forEach 遍历所有的元素*/
	var arr1 = [1,2,3]
	arr1.forEach(function (item,index) {
	  console.log('forEach')
	  console.log(index,item)
	})

	/*every 判断所有元素是否都符合条件*/
	var arr2 = [1,2,6]
	
	 var result = arr2.every(function (item,index) {
	  if (item < 4) {
	    return true
	  }
	  console.log('every')
	  console.log(index,item)
	})
	 console.log(result)
	/*some 判断至少有一个元素符合要求*/
	var arr3 = [1,2,6]
	
	 var result = arr3.some(function (item,index) {
	  if (item < 4) {
	    return true
	  }
	  console.log('some')
	  console.log(index,item)
	})
	 console.log(result)
	/*sort 排序*/
	var arr4 = [1,5,1.5,1.1,61,5,54,71,9] 
	var arr5 = arr4.sort(function (a,b) {
	  //从大到小
	  return a - b 
	  //从小到大
	})
	console.log(arr5)
	
	
	
	
	/*map 对元素重新组装，生成新数组*/
	var arr6 = arr5.map(function (item,index) {
	  return '' + item + ''
	})
	console.log(arr6)
	/*filter 过滤符合条件的元素*/
	var arr7 = arr5.filter(function(item,index) {
	  if (item >= 2) {
	    return true
	  } 
	})
	console.log(arr7)