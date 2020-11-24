// 导入模块
const htttp = require("http");
const querystring = require("querystring");
// 创建web实例
const server = htttp.createServer();

server.on("request", (req, res) => {
    // 创建一个逐步接受数据的容器
    let arr = [];
    // 逐步接受数据
    req.on("data", (buffer) => {
        arr.push(buffer);
    })
    req.on("end", () => {
        //获取接受数据的容器
        let buffer = Buffer.concat(arr);
        //将buffer转化成我们可以识别的字符串
        let str = buffer.toString();
        // 将字符串转换为对象的形式，方便我们进行使用
        console.log(querystring.parse(str));
    })

})


server.listen(8003, () => {
    console.log("server is running at http://127.0.0.1:8003")
})
