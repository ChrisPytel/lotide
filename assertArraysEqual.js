//"assertArraysEqual.js A5 - Added module.exports and moved test runner code into test/assertArraysEqualTest.js"

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB))  console.log(`✅ Assertion Passed: ${arrA} === ${arrB}`);
   else console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}`);  
};

module.exports = assertArraysEqual;