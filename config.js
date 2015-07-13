
module.exports = {
    andrew: {
        port:8888,
        cache: false,
        singleCore: true,
        services:{
            sqrt: "http://localhost/rest/v1/route-handlers/sqrt/{:number}"
        },
        sqrtConfig:{
            precision:3,
            startGuess: 1
        }
    }
}
