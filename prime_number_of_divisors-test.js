"use strict";

var prime_number_of_divisors = require("../HackBulgaria/prime_number_of_divisors").prime_number_of_divisors ;

exports.testFactorialForZero = function(test) {
  test.equal(true, prime_number_of_divisors (7));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(false, prime_number_of_divisors (8));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(true, prime_number_of_divisors (9));
  test.done();
};


//prime_number_of_divisors(7) === true
//prime_number_of_divisors(8) === false
//prime_number_of_divisors(9) === true
