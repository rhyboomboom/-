
const http=require("http");
const path=require("path")
const fs=require('fs');


const server=http.createServer();

// 监听

server.on('request',(req,res)=>{
    let  pathname=req.url;
    console.log(pathname)
    pathname=pathname==='/'?"./index.html":pathname;
    let filename =path.join(__dirname,"public",pathname);


    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end("over")
        }else{
            res.end("ok")
        }
    })

})

server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080")
})