const http = require('http')

const server=http.createServer()

// server.on('request',function(req,res){
//   console.log('someone is visiting');
//   const url=req.url
//   const method = req.method
//   const str = `you requrst is ${url}, and method is ${method}`
//   console.log('str',str);
//   res.setHeader('Content-Type','text/html','charset=utf-8')
//   res.end(str)
// })

server.on('request',function(req,res){
  const url=req.url
  let Content = '<h1>404 not found</h1>'
  if(url==='/' || url ==='/index.html'){
    Content='<h1>main page</h1>'
  }else if(url === '/about.html'){
Content ='<h1>about page</h1>'
  }
  res.setHeader('Content-Type','text/html','charset=utf-8')
  res.end(Content)
})
server.listen(8080,function(){
  console.log('server is running http://127.0.0.1:8080');
})
