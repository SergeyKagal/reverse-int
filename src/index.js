module.exports = function reverse (n) {
 if (n<0) n*=-1;
 
  var arr = n.toString();
  var arr1=arr.split('').reverse().join('');
arr1*=1;
return arr1;
}
