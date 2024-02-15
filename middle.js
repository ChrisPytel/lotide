//"middle.js A4 - Moved test runner code to test/middleTest.js, added module.exports = middle"

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

module.exports = middle;