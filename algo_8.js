// Week 2 Day 4 - Some like it flat
// Nesting Arrays
// Arrays are capable of having arrays inside of them. Assuming we're given an array like...

var arr2d2 = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];

console.table(arr2d2);

// We can console.log the `8` in this array if we

console.log(arr2d2[0][2]);

// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

/*

Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

Note - Don't assume the array will always be the same size, we must rely on its .length property

Hint - Can we put a for loop inside another for loop?

*/


var arr2d2 = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];

function isPresent2d(arr2d, value){
for (let i = 0; i < arr2d.length; i++){
  for (let j = 0; j < arr2d[i].length; j++){
    if (arr2d[i][j] == value){
      return true
    }
  }
}
return false
}

/*

Flatten Array
Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

*/

// Built in methods. These come pre-baked into JS.
// .pop() and .push()

function flattenArray(arr2d) {
  var newArr = [];
  for (var i = 0; i < arr2d.length; i++) {
      arr2d[i].reverse();
      for (var j = 0; j < arr2d[i].length + j; j++) {
          var temp = arr2d[i].pop();
          newArr.push(temp);
      }
  }
  console.log(newArr);
}


  // take every element from 2d array and push into new array
  // return newArr


  function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i < arr2d.length; i++){
        for(var x = 0; x < arr2d[i].length; x++){
            flat.push(arr2d[i][x])
        }
    }
    return flat;
}
var result = flatten(arr2d);
console.log(result)