//"assertArraysEqual.js A3 - Refactored so that comparisonresult variable within assertArraysEqual is skipped entirely"

//Prints the result of the eqArrays comparison algorithm.
const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB))  console.log(`✅ Assertion Passed: ${arrA} === ${arrB}`);
   else console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}`);  
};


//eqArrays takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {//first checks if the arrays are of the same length
    console.log("💥 Arrays are of different length, returning false");
    return false;  
  }
  for (let i = 0; i < arr1.length; i++) {
    // console.log("Comparing:", arr1[i], ` Datatype: ${typeof arr1[i]} with `, arr2[i], `Datatype: ${typeof arr2[i]}`);
    if (arr1[i] !== arr2[i]) {
      console.log("💥 Array values dont match, returning false");
      return false;
    }
  }  
  console.log("🤍 Values are the same across the arrays, returning true"); 
  return true;
};


/*        Brought over the last assertions from eqArrays.js as tests        */

assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false