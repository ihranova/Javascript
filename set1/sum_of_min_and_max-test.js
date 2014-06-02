"use strict";

var sum_of_min_and_max = require("../HackBulgaria/sum_of_min_and_max").sum_of_min_and_max;

exports.testFactorialForZero = function(test) {
  test.equal(10, sum_of_min_and_max([1,2,3,4,5,6,7,8,9]));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(90, sum_of_min_and_max([-10,5,10,100]));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(2, sum_of_min_and_max([1]));
  test.done();
};

//sum_of_min_and_max([1,2,3,4,5,6,8,9]) === 10
//sum_of_min_and_max([-10,5,10,100]) === 90
//sum_of_min_and_max([1]) === 2