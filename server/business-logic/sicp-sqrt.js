const  config = require('../../config')

var guessIndex = 0;

const average = function(firstNumber,secondNumber){
    return (firstNumber+secondNumber)/2
}

const abs = function(number){
    return number < 0 ? -number: number
}

const doneGuessing = function(iteratee, originalNumber){

    console.log(++guessIndex + 'guess: ' + iteratee)
    return abs((iteratee*iteratee) - originalNumber) < Math.pow(10,-(config.andrew.sqrtConfig.precision))

}

const guessSqrt = function(iteratee, originalNumber){

    if ( doneGuessing(iteratee, originalNumber))
    {
        const result = iteratee.toFixed(config.andrew.sqrtConfig.precision)
        return result
    }

    return guessSqrt(average(iteratee,originalNumber/ iteratee), originalNumber)

}

const sqrt = function(number) {
    if(number <= 0)
        return 0

    if(number === 1)
        return 1

    return  guessSqrt(config.andrew.sqrtConfig.startGuess,number)
}

module.exports.sqrt = sqrt