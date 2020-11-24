const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    res.send("我是get访问根");
})
app.get('/html5',(req,res)=>{
    res.send("我是get2号访问/html5");
})
app.post('/html5',(req,res)=>{
    res.send("我是post");
})



app.listen(8005,()=>{
    console.log("server is  running at http://127.0.0.1:8005");
})