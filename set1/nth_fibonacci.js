var nth_fibonacci = function(number){
	if  (number == 1){
		return 1;
	}
	else if(number === 0){
		return 0;
	}
	else{
		return nth_fibonacci(number - 1) + nth_fibonacci(number-2);
	}

};

//console.log(nth_fibonacci(1));
//console.log(nth_fibonacci(10));
//console.log(nth_fibonacci(3));
//console.log(nth_fibonacci(4));



exports.nth_fibonacci = nth_fibonacci;