//Good portion is duplicated from the other file in repo: eqArrays.js

//Prints the result of eqArrays comparison algorithm.
const assertArraysEqual = function(arrA, arrB) {
  const comparisonResult = eqArrays(arrA, arrB);
  if (comparisonResult) {
    console.log(`✌ Assertion Passed: ${arrA} === ${arrB}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}\n`);
  }
};


const eqArrays = function(arr1, arr2) {
  //first checks if the arrays are of the same length
  if (arr1.length === arr2.length) {
  //sets the intial value as true. If it runs into a mismatch, sets as false and breaks the loop
    let arrayValueMatch = true;
    for (let i = 0; i < arr1.length; i++) {
      // logs for testing which value and datatype are checked
      // console.log(`Comparing: ${arr1[i]} which is dataype ${typeof arr1[i]} / ${arr2[i]} which is dataype ${typeof arr2[i]}`);
      if (arr1[i] === arr2[i]) {
        console.log("🤍 Values are the same across both indeces, so far arrayValueMatch remains: " + arrayValueMatch);
      } else if (arr1[i] !== arr2[i]) {
        arrayValueMatch = false;
        console.log("💔 Value mismatch, arrayValueMatch is now: " + arrayValueMatch);
        return false; //ends the loop early
      }
    }
    return true; //if all indices are equal
  } else {
    console.error("2 arrays passed in are not of equal length");
    return false;
  }  
};



//Brought over the last assertions from eqArrays.js as tests

// assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
// assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
// assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
// assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false