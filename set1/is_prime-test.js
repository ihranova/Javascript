"use strict";

var is_prime = require("../HackBulgaria/is_prime").is_prime;

exports.testFactorialForZero = function(test) {
  test.equal(false, is_prime(1));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(true, is_prime(2));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(false, is_prime(8));
  test.done();
};
exports.testFactorialForThird = function(test) {
  test.equal(true, is_prime(11));
  test.done();
};

exports.testFactorialForFour = function(test) {
  test.equal(false, is_prime(-10));
  test.done();
};


//is_prime(1) === false
//is_prime(2) === true
//is_prime(8) === false
//is_prime(11) === true
//is_prime(-10) === false