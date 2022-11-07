// new Date()
// console.log('date',new Date());

function dateFormat(dtStr){
const dt = new Date(dtStr)
const y = dt.getFullYear()
const m = padZero(dt.getMonth())
const d = padZero(dt.getDay())
const hh=padZero(dt.getHours())
const mm=padZero(dt.getMinutes())
const ss=padZero(dt.getSeconds())
return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
//检查是否要补零
//method1
// function padZero(n){
// if(n<10){
  
// return `0${n}`;
// }else{

// return n}
// }
//method2
// function padZero(n){
//   if(n<10){
//     return `0${n}`;
//   }
//   return n;
// }

//method3
function padZero(n){
return n<10?`0${n}`:n
}

module.exports={
  dateFormat,
}