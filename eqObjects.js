//"eqObjects.js A7 - added a case for undefined parameters"

const eqArrays = require('./eqArrays');

//eqObjects checks two objects against each other and returns true if both objects have identical keys and values 
//contents within arrays are also checked if they are matching
//returns undefined if 1 or 0 parameters are passed in 

const eqObjects = function(object1, object2) {
  if (object1 === undefined || object2 === undefined){
    return undefined;
  }
  const keys1 = Object.keys(object1);  
  const keys2 = Object.keys(object2);
  const sameLength = keys1.length === keys2.length; //stores a bool after checking the two array lengths.
  if (!sameLength){
    return false; // if we dont have the same number of keys across both objects, return false
  } 
  for (const key in object1) {
    if (Array.isArray(object1[key])) { // First checks if one of the values is an array, if so run it through eqArrays     
      if (!eqArrays(object1[key], object2[key])) {//will implicitly return false if the array passed into eqArrays is not matching
        return false; 
      }
    }
    else if (object1[key] !== object2[key]) { //Second, we compare if the primitive `values` across two objects match, if not, returns false
      return false;                           //this also implicitly checks the two `keys` against each other 
    }                                         //if a `key` is different it will be undefined and also return false
  }
  return true; //if No mismatches found across the object keys or values, returns a true
};

module.exports = eqObjects; //exports our assertEqual function to communicate across modules