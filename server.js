var http=require("http");
var url=require("url");
var fs=require("fs");

var onRequest=function(req,res){
    var pathname=url.parse(req.url).pathname;
    fs.readFile(pathname.substring(1),
        (err,data)=>{
            if(err)
            {
                console.log(err);
                //res.writeHead(404,{"content-type":"text/html"});
            }
            else{
                //res.writeHead(200,{"content-type":"text/html"});
                res.write(data.toString());
            }
            res.end();
        });
}
http.createServer(onRequest).listen(8888);
console.log("server is listening to port 8888");

