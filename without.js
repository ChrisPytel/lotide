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



//checks the contents of two arrays to see if they match
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {  //first checks if the arrays are of the same length
    let arrayValueMatch = true; //sets the intial value as true.
    //If it runs into a mismatch, sets it to false breaks the loop
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
    //console.error("2 arrays passed in are not of equal length);
    return false;
  }
};



// Implement without which will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array.
// It should return a new array with only those elements from source that are not present in the itemsToRemove array.


//passes in an sourceArray and iterates over it while writing a filteredArray to return later,
//but omits writing anything found across the removeThis array
const without = function(sourceArray, removeThis) {
  let filteredArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let isMatch = false;
    //uncomment logs for testing
    console.log(`\nOriginal array value: ${sourceArray[i]}    datatype = ${typeof sourceArray[i]}`);
    for (let i2 = 0; i2 < removeThis.length; i2++) {
      //uncomment logs for testing
      console.log(`  Value to remove: ${removeThis[i2]}    datatype = ${typeof removeThis[i2]}`);
      if (sourceArray[i] === removeThis[i2]) {
        //uncomment logs for testing
        console.log("Matched a value to remove");
        isMatch = true;
        break;
      } else {
        //uncomment logs for testing
        console.log("  Source value doesnt match any to be removed");
      }
    }
    if (isMatch) {
      //uncomment logs for testing
      console.log("😡 This value is the same as something we want removed, not writing to filteredArray");
    } else {
      //uncomment logs for testing
      console.log("✅ Source value doesnt match any to be removed, pushing to new filteredArray");
      filteredArray.push(sourceArray[i]);
    }
  }
  console.log(filteredArray);
  return filteredArray;
};






// Here are a couple examples for testing scenarios:
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// without(["1", "2", "3", 42, "tree", "potato"], [1, 2, "3", "tree", "mango"]); // => ["1", "2", 42, "potato"]


// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


//Brought over the last assertions for testing
// assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
// assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
// assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
// assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false