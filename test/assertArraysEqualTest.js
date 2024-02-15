//assertArraysEqualTest.js created - Used to test assertArraysEqual.js

const assertArraysEqual = require('../assertArraysEqual');

//Test runner code
assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false