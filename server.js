//https
const http=require('http')
const port=8000;
const myserver=http.createServer((req,res)=>{

    if(req.url='/'){
        res.end("hello");
    }
     if(req.url='/home'){
        res.end("home");
    }
})


myserver.listen(port,()=>{
    console.log("server started successfully");
})