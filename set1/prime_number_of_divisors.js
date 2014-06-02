"use strict";


var is_prime = function (n){
	var bool = true;

	if (n === 1 || n <= 0){
		bool = false;
	}
	else if(n === 2){
		bool= true;
	}
	else{
		for (var i = 2;i < n; i++)
		{
			if(n % i === 0)
			{
				bool = false; 
			}			
		}
	}
	return bool;
};

var prime_number_of_divisors = function(n) {
    
    var help = 1;
    for(var i = 2; i <= n ; i++)
    {
    	if(n % i === 0)
    	{
    		help++;
    	}
    }
    if(is_prime(help)) return true;
    else return false;
}

exports.prime_number_of_divisors = prime_number_of_divisors;
//console.log(prime_number_of_divisors(7));