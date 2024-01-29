//Good portion is duplicated from the other file in repo: eqArrays.js

//Prints the result of eqArrays comparison algorithm.
const assertArraysEqual = function(comparisonResult, arrA, arrB) {
  if (comparisonResult) {
    console.log(`✌ Assertion Passed: ${arrA} === ${arrB}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}\n`);
  }
};


const eqArrays = function(arr1, arr2) {
  //sets the intial value as true. If it runs into a mismatch, sets as false and breaks the loop
  let arrayValueMatch = true;
  //first checks if the arrays are of the same length
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {   
      // logs for testing which value and datatype   
      // console.log(`Comparing: ${arr1[i]} which is dataype ${typeof arr1[i]} / ${arr2[i]} which is dataype ${typeof arr2[i]}`);
      if (arr1[i] === arr2[i]) {
        console.log("🤍 Values are the same across both indeces, so far arrayValueMatch remains: " + arrayValueMatch);
      } else if (arr1[i] !== arr2[i]) {
        arrayValueMatch = false;
        console.log("💔 Value mismatch, arrayValueMatch is now: " + arrayValueMatch);
        break; //ends the loop early
      }
    }
  } else{
    console.error("2 arrays passed in are not of equal length");
    arrayValueMatch = false;
  }
  assertArraysEqual(arrayValueMatch, arr1, arr2);
};



//Brought over the last assertions from eqArrays.js as tests

// eqArrays([32, 12, 42], [32, 12, 42]); // => true
// eqArrays([77, 76, 42], [77, 76, 46]); // => false
// eqArrays([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
// eqArrays([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false