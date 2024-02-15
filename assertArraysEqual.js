//"assertArraysEqual.js A4 - Removed eqArrays function from this file and instead imported eqArrays.js module"

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB))  console.log(`✅ Assertion Passed: ${arrA} === ${arrB}`);
   else console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}`);  
};

module.exports = assertArraysEqual;


/*        Brought over the last assertions from eqArrays.js as tests        */

assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false