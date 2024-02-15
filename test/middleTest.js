//"middleTest.js created - used to test middle.js "

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const eqArrays = middle('../middle');

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