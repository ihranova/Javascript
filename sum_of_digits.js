"use strict";

var sum_of_digits = function(n){
    if(n >= 0 && n <= 9){
        return n;
    }
    else if (n < 0 ){
        return 1;
    }
    else{
        return n % 10 + sum_of_digits(parseInt(n / 10, 10));
    }
};

exports.sum_of_digits = sum_of_digits;

