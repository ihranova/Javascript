"use strict";


var sum_of_divisors = require("../HackBulgaria/sum_of_divisors").sum_of_divisors;

exports.testFactorialForZero = function(test) {
  test.equal(15, sum_of_divisors(8));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(8, sum_of_divisors(7));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(1, sum_of_divisors(1));
  test.done();
};
exports.testFactorialForThird = function(test) {
  test.equal(2340, sum_of_divisors(1000));
  test.done();
};

//sum_of_divisors(8) === 15
//sum_of_divisors(7) === 8
//sum_of_divisors(1) === 1
//sum_of_divisors(1000) === 2340