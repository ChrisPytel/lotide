const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}\n`);
  }
};



//assisting EQ objects in its first test to count and return how many keys an object has 
const keyCounter = function(objectToCount){
  let keyCount = 0;
    for (const keys in objectToCount){
      keyCount++
    }
  return keyCount;
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false!
const eqObjects = function(object1, object2){
   
  if (keyCounter(object1) === keyCounter(object2)){
    console.log(`these two have the same number of keys`);
  }
  else{
    console.log(`they do not`);


  }

  return true; //returns a true if we dont encounter a mismatch
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false


// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);