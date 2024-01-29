//Good portion is duplicated from the other file in repo: eqArrays.js

const assertArraysEqual = function(arr1, arr2) {
  //sets the intial value as true, if it runs into a mismatch, sets as untrue and returns false, breaking the loop
  let arrayValueMatch = true;

  //first checks if the arrays are of the same length
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      console.log(`Comparing: ${arr1[i]} which is dataype ${typeof arr1[i]} / ${arr2[i]} which is dataype ${typeof arr2[i]}`);
      if (arr1[i] === arr2[i]) {
        console.log("🤍 Values are the same across both indeces, so far arrayValueMatch remains: " + arrayValueMatch);
      } else if (arr1[i] !== arr2[i]) {
        arrayValueMatch = false;
        console.log("💔 Value mismatch, arrayValueMatch is now: " + arrayValueMatch + " ending loop now.");
        break;
      }
    }
  }   
  else if (arr1.length !== arr2.length){
    console.error("2 arrays passed in are not of equal length");
    arrayValueMatch = false;
  }

  if (arrayValueMatch) {
    console.log(`✌ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (arrayValueMatch === false) {
    console.log(`🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};


//Brought over the last assertions from eqArrays.js as tests

// assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
// assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
// assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
// assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false