"use strict";

const restify = require('restify');
const server = restify.createServer({
    //certificate:"" If you want to create an HTTPS server, pass in the PEM-encoded certificate and key
    name:'todoApp'
});

function respond(req,res,next){
    res.send('hello'+req.params.name);
    next();
}
server.get('/hello/:name',respond);

// 404
server.use(function(req,res){
    res.status(404);
    next({code:404,msg:"无效的请求地址"})
})

server.listen(8080,function(){
    console.log('%s listen at %s',server.name,server.url)
})





