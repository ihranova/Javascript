"use strict";

var sum_of_min_and_max = function(arr) {
    var n = arr.length - 1;
	arr.sort(function(a, b){ return a-b; });
	return arr[0] + arr[n]; 
  };

exports.sum_of_min_and_max = sum_of_min_and_max;
