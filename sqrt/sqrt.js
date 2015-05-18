
const sqrtStart = 1
    , precision = 0.001
    , precisionLength = 3

const average = function(firstNumber,secondNumber){
    return (firstNumber+secondNumber)/2
}

const abs = function(number){
    return number < 0 ? -number: number
}

const doneGuessing = function(iteratee, originalNumber){

    return abs((iteratee*iteratee) - originalNumber) < precision

}

const guessSqrt = function(iteratee, originalNumber){

        if (doneGuessing(iteratee, originalNumber))
            return iteratee.toFixed(precisionLength)

        return guessSqrt(average(iteratee,originalNumber/ iteratee), originalNumber)

}

const sqrt = function(number){

    if(number <= 0)
        return 0

    if(number === 1)
        return 1

    return guessSqrt(sqrtStart,number)

}

console.log(sqrt(144))
