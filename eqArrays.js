// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }

};

const eqArrays = function (arr1, arr2){
  let arrayValueMatch = true;

// traditional execution with a for loop
  for (let i = 0; i < arr1.length; i++){
    console.log(`Comparing: ${arr1[i]} type= ${typeof arr1[i]} / ${arr2[i]} type= ${typeof arr2[i]}`);
    if (arr1[i] === arr2[i]) {
      console.log("Values are the same across both indeces, so far arrayValueMatch remains: ");
      console.log(arrayValueMatch);
    }
    else if (arr1[i] !== arr2[i]){      
      arrayValueMatch = false;
      console.log("💔 Array value mismatch, arrayValueMatch is now: " + arrayValueMatch);
      return arrayValueMatch;
    }
  } 
return arrayValueMatch;
}




// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 
// The tests can be written below the definition of your function. Here's one example to get you started.

// eqArrays([32, 12, 42], [32, 12, 42]); // => true
// eqArrays([77, 76, 42], [77, 76, 46]); // => false

// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// assertEqual("tomato", "tomAto"); // => should fail
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS  Assertion check
// assertEqual(eqArrays([16, 32, 64], [16, 32, 128]), true); // => should FAIL Assertion check




