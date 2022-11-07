const fs=require('fs')

fs.writeFile('./files/3.txt','hi',function(err){
  if(err){
    return console.log('error',err.message);
  }
console.log('write file succeed');
})