## 基础命令   
创建文件夹  **`mkdir test`**   
查看当前文件夹下的内容 **`ls`**   
查看当前文件夹下的内容用详细列表的方式 **`ll`**    
查看当前文件夹的路径  **`pwd`**    
删除当前的文件夹下的内容 **`rm -rf test`** 这个会删除该文件夹下的所有的文件   
新建文件  **`vi a.js`**       
复制文件 a.js到 a1.js  **`cp a.js a1.js`**
移动文件 a1.js 到 一个新的文件夹 **`mv a1.js src/a1.js`** src/a1.js 这个是移动的路径   
删除文件 **`rm a.js`**   
保存退出 **`:w 是写入的意思 :q 是退出的意思 :wq 就是保存并退出的意思`**    
查看文件的从头开始的某一行 **`head -n 1 a.js`** (这里是查看了第一行)       
查看文件的从尾开始的某一行 **`tail -n 1 a.js`** (这里是查看了=倒数第一行)       
