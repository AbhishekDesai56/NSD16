var async = require('async');

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    console.log(result);
});
function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    callback(null, 'done');
}