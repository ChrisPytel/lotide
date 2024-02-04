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
    console.log(`These objects have the same number of keys, now comparing contents`);

    for (const key1 in object1){
      let keyMatch = false;
      let valueMatch = false;
      console.log("\nBegin primary loop on first object:");
      console.log("our key is " + key1 + " and our value is " +object1[key1]);

      for (const key2 in object2){
        console.log("Loop comparing second object");
        console.log("our key is " + key2 + " and our value is " +object2[key2]);
        if (key1 === key2){
          console.log(`💛 Found matching keys: ` + key1 + " and " +key2);
          keyMatch = true;
        } 
        if (object1[key1] === object2[key2] ){
          console.log(`🧡 Found matching values: ` + object1[key1] + " and " +object2[key2]);
          valueMatch = true;
        }        
      }
      
      if (keyMatch === false || valueMatch === false)
      console.log(`💢Either a key or value was mismatched at the end of this primary loop`);  
      return false;    
    }    
  }
  else{
    console.log(`objects were of different length`);
    return false; // returns false if there is mismatch on # of keys
  }
  return true; //returns a true if we dont encounter no mismatch
}


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true


const shirtMismatchA = { color: "red", size: "medium" };
const shirtMismatchB= { size: "large", color: "red" };
eqObjects(shirtMismatchA , shirtMismatchB); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false


// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);