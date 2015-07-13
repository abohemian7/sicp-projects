const http = require('http')
    , koa = require('koa')

const routes = require('./routes/sicp-sqrt-routes')
    , app = koa()
    , config = require('../config')

const startServer = function(config){
    app.use(routes.anonymousRouteMiddleware());
    app.listen(config.andrew.port)
    console.log('Config: ' + JSON.stringify(config.andrew,null,3))
    console.log('LISTENING ON: ' + config.andrew.port)
}

startServer(config)

//http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//}).listen(8888);
