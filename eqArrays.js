const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {  
  if (arr1.length !== arr2.length){
    console.log("💥 Arrays are of different length");
    return false;  //first checks if the arrays are of the same length 
  }
  for (let i = 0; i < arr1.length; i++) {
    // console.log("Comparing:", arr1[i], ` Datatype: ${typeof arr1[i]} with `, arr2[i], `Datatype: ${typeof arr2[i]}`);
    if (arr1[i] !== arr2[i]) {
      console.log("💥 Array values dont match, returning false");
      return false;
    } 
  }
  console.log("🤍 Values are the same across the arrays, returning true"); //no longer needed to be else if (arr1[i] === arr2[i]) as it is implicit
  return true;
};


/*         Assertion tests        */

// eqArrays([32, 12, 42], [32, 12, 42]); // => true
// eqArrays([77, 76, 42], [77, 76, 46]); // => false
// eArrayqs([77, 76, 42], [77, 76]); // => error, different length arrays
// eqArrays([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false

// assertEqual("tomato", "tomAto"); // => should fail
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS  Assertion check
// assertEqual(eqArrays([16, 32, 64], [16, 32, 128]), true); // => should FAIL Assertion check