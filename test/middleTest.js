//"middleTest.js A1 - Refactored testing logic to utilize the modules"

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test runner code
// middle([1, 2]) // => returns empty array
// middle([1, 2, 3, 4, 5]) // => [3]
// middle(1, 2, 3, 4, 5, 6, 7, 8) // => [4, 5]

//for longer arrays
const longArray1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const longArray2 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
assertArraysEqual(middle(longArray1), [18]); // => Assert Passed!
assertArraysEqual(middle(longArray2), [39, 40]); // => Assert Passed!

//generates a customized SUPERLONG array of numbers between our intialized contitions
const reallyLongArray = [];
for (let i = 160; i <= 201; i++) reallyLongArray.push(i);
assertArraysEqual(middle(reallyLongArray), [180, 181]);// => Assert Passed!