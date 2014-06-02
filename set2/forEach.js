/*var forEach = function(f, arr) {
  var
    i = 0,
    n = arr.length;

    for(i; i < n; i++) {
      f(arr[i], i, arr);
      

    }
};*/
// друг вариант
function forEach(f,array) {
  for (var i = 0; i < array.length; i++)
    f(array[i]);
};


forEach( function(x) { console.log(x);},["Wampeter", "Foma", "Granfalloon"]);