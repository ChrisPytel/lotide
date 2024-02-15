//"middle.js A3 - Removed assertArraysEqual + eqArrays functions and imported modules"

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
// For arrays with one or two elements, there is no middle. Returns an empty array.
// For arrays with even number of elements, will return the middle 2 values.
// For arrays with odd number of elements, will return only the middle value.
const middle = function(arr) {
  console.log("\nArray passed in is:", arr);
  const arrayMid = [];
  if (arr.length < 3) {
    console.log("no middle found in arrays under size 3");
    return arrayMid;
  } else if (arr.length % 2 === 0) { //checks if length is even and returns middle 2 values
    console.log("arr.length is even, here are the middle 2 values:");
    arrayMid.push(arr[(arr.length - 2) / 2]);     //divides the length and pushes index value
    arrayMid.push(arr[arr.length / 2]);           //divides the arr and pushes index value
  } else if (arr.length % 2 === 1) {//checks if length is odd and returns 1 middle value
    console.log("arr.length is odd, here is the middle value:");
    arrayMid.push(arr[(arr.length - 1) / 2]);
  }
  console.log(arrayMid);
  return arrayMid;
};

//Test runner code
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]

const longArray1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
middle(longArray1) // => [18] is the middle with 15 indices
const longArray2 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
middle(longArray2); // => [39, 40] are the middle with 18 indices

//for customized super longtests
  const reallyLongArray = [];
    for (i = 162; i < 194; i++){ //creates an array of numbers between our intialized contitions
    reallyLongArray.push(i);
  }

// middle(reallyLongArray);

assertArraysEqual(eqArrays(reallyLongArray, []), true );