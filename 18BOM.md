## browser object model === BOM 
检测浏览器的类型      
navigator    

	var ua = navigator.userAgent  //这是一个很长的字符串，包括很多信息，
	比如 iPhone Android chrome 等，用来判断用户的手机是什么操作系统之类的    
	var isChrome = ua.indexOf('chorme')   
location

	location.href  //整个的 URL
	location.protocol // 'http' or 'https' 协议
	location.host // 域名
	location.pathname // 路径 '/learn/133'
	location.search //？后面的查询字符串，是一些参数
	location.hash // # 号后面的一些字符，就是 hash
history   

	history.back()  返回
	history.forward()  前移

## 拆解 URL 
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
(all spaces in the "" line should be ignored -- they are purely for formatting)