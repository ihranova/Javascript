"use strict";


var list_to_number = require("../HackBulgaria/list_to_number").list_to_number;

exports.testFactorialForZero = function(test) {
  test.equal(123, list_to_number([1,2,3]));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(99999, list_to_number([9,9,9,9,9]));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(123023, list_to_number([1,2,3,0,2,3]));
  test.done();
};

//list_to_number([1,2,3]) === 123
//list_to_number([9,9,9,9,9]) === 99999
//list_to_number([1,2,3,0,2,3]) === 123023
