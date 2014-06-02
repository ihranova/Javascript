"use strict";


var is_number_balanced = require("../HackBulgaria/is_number_balanced").is_number_balanced;

exports.testFactorialForZero = function(test) {
  test.equal(true, is_number_balanced(9));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(true, is_number_balanced(11));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(false, is_number_balanced(13));
  test.done();
};
exports.testFactorialForThird = function(test) {
  test.equal(true, is_number_balanced(121));
  test.done();
};
exports.testFactorialForFour = function(test) {
  test.equal(true, is_number_balanced(4518));
  test.done();
};
exports.testFactorialForFive = function(test) {
  test.equal(false, is_number_balanced(28471));
  test.done();
};
exports.testFactorialForSix = function(test) {
  test.equal(true, is_number_balanced(1238033));
  test.done();
};

//is_number_balanced(9) === true
//is_number_balanced(11) === true
//is_number_balanced(13) === false
//is_number_balanced(121) === true
//is_number_balanced(4518) === true
//is_number_balanced(28471) === false
//is_number_balanced(1238033) === true