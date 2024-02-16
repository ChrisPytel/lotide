//"eqObjects.js a6 - refactored test cases into test/eqObjectTest.js and imported eqArrays module"

const eqArrays = require('./eqArrays');

//eqObjects checks two objects against each other and returns true if both objects have identical keys and values (array contents included)

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);  // Object.keys method returns an array of all the keys from the obj we pass in
  const keys2 = Object.keys(object2);
  const sameLength = keys1.length === keys2.length; //stores a bool after checking the two array lengths.
  if (!sameLength) return false;  
  for (const key in object1) {
    if (Array.isArray(object1[key])) {     //checks if one of the values is an array, if so run it through eqArrays     
      if (!eqArrays(object1[key], object2[key])) {
        return false; //will implicitly return false if the contents within the array passed into eqArrays is not aligned
      }
    }
    //Otherwise we compare whether the primitive `values` across two objects match, if not, returns false
    //this also implicitly checks the two `keys` against each other 
    //if a `key` is different it will be undefined and also return false
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true; //if No mismatches found across the object keys or values, returns a true
};

module.exports = eqObjects; //exports our assertEqual function to communicate across modules