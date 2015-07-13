/**
 * Created by jfataj on 7/8/2015.
 */

/**  procedure that takes two numbers and returns their sum */

function summation(a,b) {
    var sum2 = a + b;
    return sum2;
};

summation(1,2);

/** procedure that takes 3 numbers as arguments and returns the sum of the squares of the two larger ones */

var x = [2,1,3];

var y = x.sort(function(a, b) {
    return a - b;
});

var z = y[1];

var w = y[2];

var q = function sumsquares(z,w){
    y1 = z * z + w * w;
    return y1;
};

q(z,w);

/** prcedure that takes a number and returns the square root of the number, using Newton's method of successive
 * approximation
 */

var original = 10000000;
var initialguess = 1;

var avg = function(a,b) {
    avg2 = (a + b) * 1/2;
    return avg2;
};

var ratio = function(a){
    ratio2 = original / a;
    return ratio2;
};

var collection = [];
i = 1;
collection[0] = initialguess;
collection[1] = avg(collection[0],ratio(collection[0]))


while(Math.abs(collection[i-1]-collection[i]) > 0.001){
    collection[++i] = avg(collection[i-1],ratio(collection[i-1]));

    //return collection[i-1];
    console.log(collection[i])
};

console.log(collection.length)

