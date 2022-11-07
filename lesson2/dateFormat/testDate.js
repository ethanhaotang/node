//导入dateFormat模块
const time= require('./date')

const dt=new Date()
const newDT= time.dateFormat(dt)
console.log('newDT',newDT);