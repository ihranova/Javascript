
/*var map = function (f,arr){
	var len = arr.length;
	var result = [];
	var i = 0;
	for(i ; i < len; i++){
		result.push(f(arr[i]));
	}
	return result;
};*/
//друг вариант
function forEach(f,arr) {
  for (var i = 0; i < arr.length; i++)
    f(arr[i]);
}

var map = function(f,arr){
	var result = [];
	forEach(function(elem){result.push(f(elem));},arr);
	return result;
};
var result = map(function(x) {
    return x * x;
}, [1,2,3]);

console.log(result); // [1, 4, 9]
