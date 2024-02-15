//"eqArrays.js A4 - removed assertEqual function and cleaned up comments for eqArrays"

//eqArrays takes in two arrays and returns true or false, based on a perfect match across indexes
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("💥 Arrays are of different length! returning false");
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("💥 Array values dont match across indexes! returning false");
      return false;
    }
  }
  console.log("🤍 Values are the same across the arrays! returning true"); 
  return true;
};

module.exports = eqArrays;