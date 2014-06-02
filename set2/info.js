var info = {
    "name" : "Rado",
    "age" : 23
};
var forEach = function(f, arr) {
  var
    i = 0,
    n = arr.length;

    for(i; i < n; i++) {
      f(arr[i], i, arr);
    }
};

forEach(function(value, key) {
   console.log(key, value);
   // name - Rado
   // age - 23
}, info);
