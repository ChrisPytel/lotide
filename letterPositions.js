
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


//Brought over the last assertions from eqArrays.js as tests
// assertArraysEqual([32, 12, 42], [32, 12, 42]); // => true
// assertArraysEqual([77, 76, 42], [77, 76, 46]); // => false
// assertArraysEqual([77, 76, 42], [77, 76]); // => ERROR, 2 arrays passed in are not of equal length
// assertArraysEqual([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false







// We'll implement a new function letterPositions which will return all the
//  indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent
//  its number of occurrences, multiple numbers may be needed to represent 
//  all the places in the string that it shows up.


/*
run a for of through all letters


*/

const letterPositions = function(sentence) {
  const results = {};
  let letterIndexNumber = 0;

  for (const letter of sentence){ 
    

    if (letter === " "){
      console.log("🌌 Encountered a space, skipping this");
    }

    else if (letter !== " ") {
      console.log(letter +" is a letter");
      console.log("at index # " + letterIndexNumber);
      results[letter] = [letterIndexNumber];     
    } 

    console.log("end of loop" +letterIndexNumber);
    letterIndexNumber++;    
  }

  return results;
};




// const sequenceA = letterPositions("lighthouse in the house");
// console.log(sequenceA);
const sequenceA = letterPositions("hello");
console.log(sequenceA);
// const sequenceB = letterPositions("Lighthouse Labs is pretty gosh darn cool");
// console.log(sequenceB);
// const sequenceC = letterPositions("Give life back to music");
// console.log(sequenceC);