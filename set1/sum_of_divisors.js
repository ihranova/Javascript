"use strict";

var sum_of_divisors = function(n) {
  
  var help = 1;
    for(var i = 2;i<=n; i++)
    {
    	if(n % i === 0)
    	{
    		help = i + help;
    	}
    }
    return help;
  };

  exports.sum_of_divisors = sum_of_divisors;