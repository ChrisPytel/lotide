//"takeUntil.js A3 - refactored takeUntil, accidentally used a for..in instead of a for..of loop. Haha, oops :)"

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

//  takeUntil function takes in an array, and a callback, returns an array of elements after
//  checking what our callback function requires, stopping when condition is met
const takeUntil = function(array, callback) {
  const newArray = [];
  // console.log(`our initial array is:`, array);
  for (const element of array) {
    // console.log(`element: `, array[element]);
    if (callback(element) === false) {
      newArray.push(element);
    } else break; //ends the loop as soon as the callback hits a true return
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, number => number < 0);
console.log(results1);    //Expected Output [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);    //Expected Output [ 'I've', 'been', 'to', 'Hollywood' ]



/*        assertions for testing         */

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);  // => true
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);  // => true