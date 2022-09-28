const fs = require('fs');
/*使用require来引入fs文件 */



fs.writeFile('./files/2.测试写入代码.txt','你好！世界',function(err , yes){
    console.log(err);
})
