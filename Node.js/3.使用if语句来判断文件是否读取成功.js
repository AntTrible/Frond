const fs = require('fs')
/*使用require来调用fs函数来进行读取文件操作 */


fs.readFile('./files/11s.txt','utf8',function(err , yes){
    if(err != null){
        console.log("文件读取失败" +"\n"+ err.message);
    }else{
        console.log("文件读取成功"+"\n"+"文件的内容是"+"\n"+yes)
    }
})