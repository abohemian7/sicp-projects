"use strict"
const sicpSqrt  =require('../../business-logic/sicp-sqrt')
    , htmlMarkupStart = '<!doctype html><html lang="en"><head><meta charset="utf=8"><title>The answer: </title></head><body>'
    , htmlMarkupEnd = '</body></html>'

module.exports.sqrtHandler = function*(){

    const number = this.params.number
    const value  = sicpSqrt.sqrt(number)

    this.body = htmlMarkupStart + value  + htmlMarkupEnd
}

