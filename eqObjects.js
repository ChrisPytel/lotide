const eqArrays = function(arr1, arr2) {
  //first checks if the arrays are of the same length
  if (arr1.length === arr2.length) {
    // traditional execution with a for loop
    for (let i = 0; i < arr1.length; i++) {
      //console.log(`Comparing: ${arr1[i]} type= ${typeof arr1[i]} / ${arr2[i]} type= ${typeof arr2[i]}`);
      if (arr1[i] === arr2[i]) {
        console.log("Values are the same across both indeces");
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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}\n`);
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


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { pattern: "wavy", color: "red" };



/*``````````````````````````````````````````*/
/*           lots of test cases             */
/*``````````````````````````````````````````*/

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// // eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


// const shirtMismatchA = { color: "red", size: "medium" };
// const shirtMismatchB = { size: "large", color: "red" };
// // eqObjects(shirtMismatchA , shirtMismatchB); // => true
// assertEqual(eqObjects(shirtMismatchA , shirtMismatchB), false);


// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// // eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "large", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false