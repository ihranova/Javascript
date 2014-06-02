var filter = function(pred, arr){
	var len = arr.length;
	var result = [];
	for(var i = 0;i < len; i++){
		if(pred(arr[i]))
		{
			result.push(arr[i]);
		}
	}
	return result;
};



var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

// filter all users with score bigger than 40

var result = filter(function(user) {
    return user.score > 40;
}, users);

console.log(result);
/*
[ { name: 'Rado', score: 50 },
  { name: 'Ivan', score: 67 } ]
*/