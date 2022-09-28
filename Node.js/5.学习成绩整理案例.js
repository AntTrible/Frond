const fs =require('fs');

fs.readFile('./files/3.原来的学习成绩.txt','utf-8',function(err , yes){
    console.log(yes);

   //先把成绩的数据，按照空格进行分割
   const arrOld = yes.split(' ');
   //循环分割后的数组，对每一项数据，进行字符串的替换操作
   const arrNew = [];

   arrOld.forEach(item =>{
    arrNew.push(item.replace('=',':'))
   })
    
   //把新数组的每一项，进行合并，得到一个新的字符串

   const newStr = arrNew.join('\r\n');
   console.log(newStr);

   fs.writeFile('./files/4.修改的学习成绩.txt',newStr,function(err , yes){
    console.log(err);
   })
   
})