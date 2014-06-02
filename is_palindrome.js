var nth_n = function(n){
   var str = n + "";
   return str.length;
};


var is_int_palindrome_help = function(n) {
    
    if(n == 0) {
    	return n;
    }
    else {
    	return (n % 10) * Math.pow(10,nth_n(n) - 1) + is_int_palindrome_help((Math.floor (n / 10))) ;
    }
};

var is_palindrome = function(n)
{
	return n === is_int_palindrome_help(n);
};
exports.is_palindrome = is_palindrome;
//console.log(is_int_palindrome(424));