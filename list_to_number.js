var list_to_number = function(digits){
    var len = digits.length;
    var help = 0;
    var n = len - 1;
    for(var i = 0 ; i < len ; i++ )
    { 
       help = help + digits[i]*Math.pow(10,n);
       n--;
    }
    return help;
};

exports.list_to_number = list_to_number;

