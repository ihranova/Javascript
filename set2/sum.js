
function forEach(f,array) {
  for (var i = 0; i < array.length; i++)
    f(array[i]);
};

var reduce = function (f,base){
	forEach(function(elem) {
		base = f(base,elem);
	},Array.isArray())
	return base;
}

var sum = function(arr) {
    return arr.reduce(function(acc, next) {
        return acc + next;
    }, 0);
};
console.log(sum([1,2,3,4])); ///10