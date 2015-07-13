"use strict"
const Router = require('koa-router')

const sicpRoutes = function(router){

    const sicpProjects = require('../route-handlers/anonymous/sicp-sqrt-handlers')

    router.get('/rest/sicp/lesson1/sqrt/:number/',sicpProjects.sqrtHandler)

}

module.exports.anonymousRouteMiddleware = function(){
    const anonymous = new Router();
    sicpRoutes(anonymous);

    return anonymous.middleware();
}