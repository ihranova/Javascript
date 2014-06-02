"use strict";


var is_palindrome = require("../HackBulgaria/is_palindrome").is_palindrome;

exports.testFactorialForZero = function(test) {
  test.equal(true, is_palindrome(1));
  test.done();
};
exports.testFactorialForOne = function(test) {
  test.equal(false, is_palindrome(42));
  test.done();
};
exports.testFactorialForTwo = function(test) {
  test.equal(true, is_palindrome(100001));
  test.done();
};
exports.testFactorialForThird = function(test) {
  test.equal(true, is_palindrome(999));
  test.done();
};
exports.testFactorialForFour = function(test) {
  test.equal(false, is_palindrome(123));
  test.done();
};




//is_int_palindrome(1) === true
//is_int_palindrome(42) === false
//is_int_palindrome(100001) === true
//is_int_palindrome(999) === true
//is_int_palindrome(123) === false