var any = function(pred, arr) {
   var bool = false;
   var len = arr.length;
   for(var i = 0;i < len ; i++){
   	    if(pred(arr[i])){
   		    bool = true; break;
   	    }  
   	} 
   	return bool;

};

var all = function(pred, arr) {
   var bool = true;
   var len = arr.length;
   for(var i = 0;i < len ; i++){
   	if(!pred(arr[i])){
   		bool = false; break;
   	}
  }
  return bool;

};

var array = [1,2,3,4,5,2];
var result = any(function(x){ return x === 6;}, array);
console.log(result);
var array1 = [1,1,1,1];
var result1 = all(function(x){ return x === 1;}, array1);
console.log(result1);
