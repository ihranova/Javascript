"use strict";


var sum_of_digits = require("../HackBulgaria/sum_of_digits").sum_of_digits;

exports.testFactorialForZero = function(test) {
  test.equal(43, sum_of_digits(1325132435356));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(6, sum_of_digits(123));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(6, sum_of_digits(6));
  test.done();
};
exports.testFactorialForThird = function(test) {
  test.equal(1, sum_of_digits(-10));
  test.done();
};

//sum_of_digits(1325132435356) === 43
//sum_of_digits(123) === 6
//sum_of_digits(6) === 6
//sum_of_digits(-10) === 1