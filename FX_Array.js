// Take an array of objects, use a prototype and for each to change attributes in that array.

var food = ['hotdogs', 'pizza', 'chalupas', 'biscotti'];


Array.prototype.customForEach = function(fn){
var thisArray = this

for (i = 0; i < thisArray.length ; i++){
  fn(thisArray[i]);
}
