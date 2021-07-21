var async = require('async');

var user = {};

user.getFirstName = function(callback) {
    var firstName = "John";
    callback(null, firstName);
}

user.getLastName = function(callback) {
    var lastName = "Doe";
    callback(null, lastName);
}

user.getAge = function(callback) {
    var age = "25";
    callback(null, age);
}

async.parallel(user, function(err, result) {
    if(err) {
        console.error(err);
        return;
    }
    console.log(result);
})