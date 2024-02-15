//"eqArrays.js A5 - removed console logs completely, and refactored some lines to be inline"

//eqArrays takes in two arrays and returns true or false, based on a perfect match across indexes
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

module.exports = eqArrays;