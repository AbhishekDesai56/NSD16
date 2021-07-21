var async = require('async');

var stack = [];

var functionOne = function(callback) {
    callback(null, 'Function one')
}

var functionTwo = function(callback) {
    callback(null, 'Function two')
}

var functionThree = function(callback) {
    callback(null, 'Function three')
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function(err, result) {
    console.log(result);
})
