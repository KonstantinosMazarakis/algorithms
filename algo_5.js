// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);




//---------------------------------------

// While loops
// We have previously worked with for loops, how are while loops different?

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}


// --------------------------------------------------


// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

// ["a", "b", "c", "d", "e"];copy
// we expect to get back...

// ["e", "d", "c", "b", "a"];


function reverse(arr){
    for(i=0;i<arr.length/2;i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr)
}

reverse(["a", "b", "c", "d", "e"])


