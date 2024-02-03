
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
    return true; //if all indices are equal// not required actually as on ln24 it breaks if false
  } else {
    //console.error("2 arrays passed in are not of equal length);
    return false;
  }
};



// We'll implement a new function letterPositions which will return all the
//  indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent
//  its number of occurrences, multiple numbers may be needed to represent
//  all the places in the string that it shows up.


const letterPositions = function(sentence) {
  const results = {};
  //instead of doing a for in, its easier to just create a index as its own var
  let letterIndexNumber = 0;

  for (const letter of sentence) {
    if (letter === " ") {
      // console.log("🌌 Encountered a space, skipping this");
    } else if (results[letter]) {
      // console.log("🚀 Exists as a letter already, adding another index #");
      results[letter].push(letterIndexNumber);
    } else if (letter !== " ") {
      // console.log(letter + " is a letter at index # " + letterIndexNumber);
      results[letter] = [letterIndexNumber];
    }
    // console.log("end of loop" + letterIndexNumber);
    letterIndexNumber++;
  }
  return results;
};



const sequenceA = letterPositions("hello");
console.log(sequenceA);
assertArraysEqual(letterPositions("hello").e, [1]);

const sequenceB = letterPositions("lighthouse in the house");
console.log(sequenceB);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);

const sequenceC = letterPositions("Give life back to music");
console.log(sequenceC);
assertArraysEqual(letterPositions("Give life back to music").i, [1, 6 ,21]);