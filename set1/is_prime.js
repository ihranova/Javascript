

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
exports.is_prime=is_prime;
