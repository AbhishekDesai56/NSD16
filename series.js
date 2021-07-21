var async = require('async');

async.series([
    function(callback) {
        callback(null, 'one');
    },
    function(callback) {
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    //console.log(results);
});

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log(results);
});