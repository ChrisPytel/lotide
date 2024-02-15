//"eqArrays.js A7 - updated comments"

//eqArrays takes in two arrays and checks their values against each other
//Returns true/false depending if the two arrays contents are an exact match

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){  //First checks if the arrays are the same length
    return false;
  } 
  //runs a for loop that goes through the indexes of both arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){ //if the index from arr1 mismatches with arr2, returns false
      return false;
    } 
  }
  return true; // If no mismatches encountered, returns true
};

module.exports = eqArrays; //exports our assertEqual function to communicate across modules