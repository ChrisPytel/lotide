//eqArrays function is used for checking the values within two arrays passed in, returns true/false
const eqArrays = function(arr1, arr2) {  
  if (arr1.length === arr2.length) {  //first checks if the arrays are of the same length
    for (let i = 0; i < arr1.length; i++) {// iterates through and compares inner values
      console.log(`Comparing: ${arr1[i]} type= ${typeof arr1[i]} / ${arr2[i]} type= ${typeof arr2[i]}`);
      if (arr1[i] === arr2[i]) {
        console.log("🤍 Values are the same across both indeces");
      } else if (arr1[i] !== arr2[i]) {
        console.log("💔 Array value mismatch");
        return false;
      }
    }
    return true;
  } else {
    console.error("💔 2 arrays passed in are not of the equal length");
    return false;
  }
};


// eqObjects returns true if both objects have identical keys with identical values
// across 2 objects passed in (array contents included).
const eqObjects = function(object1, object2) {
  // Object.keys method returns an array of all the keys from the obj we pass in
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const sameLength = keys1.length === keys2.length; //stores a bool 
  if (!sameLength) return false;
  
  for (const key in object1) {//runs a loop through all keys in object1 which we passed in
    // console.log(key, object1[key], object2[key]); 
    if (Array.isArray(object1[key])) {     //checks if one of the values is an array
      //will implicitly return false if the contents within the array passed into eqArrays is not aligned
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }     
    //Compares whether the primitive values across two objects match, if not, returns false
    //implicitly checks the two keys against each other, if a key is different it will be undefined and also return false
    else if (object1[key] !== object2[key]) {
      console.log('Mismatch across values:', object1[key], object2[key]);
        return false;
    } 
  }
  console.log('✅No mismatches found across the object keys or values');
  return true;
};



// assertObjectsEqual which will take in two objects and console.log if theyre equal
const assertObjectsEqual = function(object1, object2) {  
  const inspect = require('util').inspect; // <= add this line to get access to the inspect library
  // console.log(`Example label: ${inspect(object1)}`);  
  const comparisonResult = eqObjects(object1, object2);
  
  if (comparisonResult) {
    console.log(`🥳 Object assertion passed: ${inspect(object1)} is the same as ${inspect(object2)}`);
  } else {
    console.log(`💥Object assertion failed: ${inspect(object1)} is different from ${inspect(object2)}`);
  }
};



/*``````````````````````````````````````````*/
/*           test cases                     */
/*``````````````````````````````````````````*/


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertObjectsEqual(shirtObject, anotherShirtObject); // => should be true

//------------------------------------------------------------

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => should be true