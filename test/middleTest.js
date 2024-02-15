//"middleTest.js A2 - Added some comments"

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test runner code

//for initially testing the middle function on its own
// middle([1, 2]) // returns empty array
// middle([1, 2, 3, 4, 5]) // returns [3]
// middle(1, 2, 3, 4, 5, 6, 7, 8) // returns [4, 5]

//for testing longer arrays
const longArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //array length is odd, should return [8]
const longArray2 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]; // array length is even, should return [36, 37]
assertArraysEqual(middle(longArray1), [8]); // => Assert Passed!
assertArraysEqual(middle(longArray2), [36, 37]); // => Assert Passed!

//generates a customized SUPERLONG array of numbers from our intialized for loop contitions
const reallyLongArray = [];
for (let i = 160; i <= 201; i++) reallyLongArray.push(i); //middle of this should be 2 numbers [180, 181]
assertArraysEqual(middle(reallyLongArray), [180, 181]);// => Assert Passed!