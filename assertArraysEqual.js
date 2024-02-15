//"assertArraysEqual.js A6 - comments updated"

const eqArrays = require('./eqArrays'); 

//assertArraysEqual asserts two arrays against each other utilizing the imported eqArrays module
//Console.logs the result of the assertions if they pass or fail

const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB)){
    console.log(`✅ Assertion Passed: ${arrA} === ${arrB}`);
  }
  else {
    console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}`);
  }  
};

module.exports = assertArraysEqual; //exports our assertArraysEqual function to communicate across modules