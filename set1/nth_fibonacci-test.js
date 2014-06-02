"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var nth_fibonacci = require("../HackBulgaria/nth_fibonacci").nth_fibonacci;

exports.testFactorialForZero = function(test) {
  test.equal(1, nth_fibonacci(2));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(55, nth_fibonacci(10));
  test.done();
};

exports.testFactorialForTwo = function(test) {
  test.equal(2, nth_fibonacci(3));
  test.done();
};


//nth_fibonacci(2) === 1
//nth_fibonacci(3) === 2
//nth_fibonacci(10) === 55
