//"letterPositions.js A3 - Refactored letterPositions() to be simpler logic, and copied in updated helper functions"

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


// We'll implement a new function letterPositions which will return all the
//  indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent
//  its number of occurrences, multiple numbers may be needed to represent
//  all the places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};
  let letterIndexNumber = 0;
  for (const letter of sentence) {
    // if a character that isnt a space is detected, pushes the the index#
    if (results[letter] && letter !== " ") results[letter].push(letterIndexNumber);    
    // if a character that isnt a space is detected, logs the index#
    else if (letter !== " ") results[letter] = [letterIndexNumber];
    letterIndexNumber++;
  }
  return results;
};

/*          Assertion tests        */

// const sequenceA = letterPositions("hello");
// console.log(sequenceA);
// assertArraysEqual(letterPositions("hello").e, [1]);

const sequenceB = letterPositions("lighthouse in the house");
console.log(sequenceB);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);

// const sequenceC = letterPositions("Give life back to music");
// console.log(sequenceC);
// assertArraysEqual(letterPositions("Give life back to music").i, [1, 6 ,21]);