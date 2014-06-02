
// дължината на числото
var nth_n = function(n){
	var str = n + "";
	return str.length;
};

///revesred number
var is_int_palindrome_help = function(n) {
    
    if(n == 0) {
    	return n;
    }
    else {
    	return (n % 10) * Math.pow(10,nth_n(n) - 1) + is_int_palindrome_help((Math.floor (n / 10))) ;
    }
};

var is_number_balanced = function(n) {
    
    var help1 = is_int_palindrome_help(n);
    var help2 = n;
    var  len = Math.floor (nth_n(n)/2);
    
    //сумата на десните числа
    var right = 0;    
    for(var i = 1; i <= len; i++ )
    {
        right = right + help1%10;
        help1 = Math.floor (help1 /10);
    }
    //сумата на левите числа
    var left = 0;
    for(var j = 1; j <= len; j++)
    {
    	left = left + help2%10;
    	help2 = Math.floor (help2 /10);
    }
    return right === left;
};
exports.is_number_balanced = is_number_balanced;
console.log(is_number_balanced(28471));