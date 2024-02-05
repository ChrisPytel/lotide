//eqArrays function is used for checking the values within two arrays passed in
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

//assisting EQ objects in its first test to count and return how many keys an object has
const keyCounter = function(objectToCount) {
  let keyCount = 0;
  for (const keys in objectToCount) {
    keyCount++;
  }
  return keyCount;
};

const eqObjects = function(object1, object2) {   
  if (keyCounter(object1) === keyCounter(object2)) { // runs the loop if both objects have same # of keys
    for (const key1 in object1) {//-----------------------------loop------------------------------
      let keyMatch = false;
      let valueMatch = false;
      // console.log("\nBegin primary loop on first object:\n");
      // console.log("Primary key is " + key1 + " and primary value is " + object1[key1]);

      for (const key2 in object2) {
        // console.log("Loop comparing second object");
        // console.log("our key is " + key2 + " and our value is " + object2[key2]);

        if (key1 === key2) {
          // console.log(`💛 Found matching keys: ` + key1 + " and " + key2);
          keyMatch = true;
        }
        //if the matching values are arrays, run a check thier internal values
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
          // console.log(`💙 Found arrays`);
          // console.log(object1[key1]);
          // console.log(object2[key2]);
          if (eqArrays(object1[key1], object2[key2])) {
            // console.log(`🧡 Found arrays with matching values: ` + object1[key1] + " and " + object2[key2]);
            valueMatch = true;
          } else {
            console.log(`💢 Array content mismatch, returning false`);
            return false;
          }
        }        
        //if it is not an array, perform the check between primitives
        else if (Array.isArray(object1[key1]) === false) {
          if (object1[key1] === object2[key2]) {
            // console.log(`🧡 Found matching values: ` + object1[key1] + " and " + object2[key2]);
            valueMatch = true;
          }
        }        
      }
      if (keyMatch === false || valueMatch === false) {
        console.log(`💢Either a key or value was mismatched at the end of this primary loop, returning false`);
        return false; // returns false if there is mismatch between keys and values across objects
      }      
    }//-----------------------------------------------------loop------------------------------
  } else {
    console.log(`💢objects were of different length, returning false`);
    return false; // returns false if there is mismatch on # of keys
  }
  console.log(`🙏 Found no mismatches across objects, returning true`);
  return true; //returns a true if we dont encounter no mismatch
};



// Implement assertObjectsEqual which will take in two objects and console.log
// and appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect; // <= add this line to get access to the inspect library
  // console.log(`Example label: ${inspect(actual)}`);
  
  const comparisonResult = eqObjects(actual, expected);
  // console.log(actual);
  // console.log(expected);
  
  if (comparisonResult) {
    console.log(`🥳 Object assertion passed: ${inspect(actual)} is the same as ${inspect(expected)}`);
  } else {
    console.log(`💥Object assertion failed: ${inspect(actual)} is different from ${inspect(expected)}`);
  }

};



/*``````````````````````````````````````````*/
/*           test cases                     */
/*``````````````````````````````````````````*/


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject); 

//------------------------------------------------------------

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(shirtObject, anotherShirtObject); // => should be true