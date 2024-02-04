const eqObjects = function(object1, object2) {
   
  if (keyCounter(object1) === keyCounter(object2)) {
    console.log(`These objects have the same number of keys, now comparing contents`);

    for (const key1 in object1) {//--------------------loop------------------------------
      let keyMatch = false;
      let valueMatch = false;
      console.log("\nBegin primary loop on first object:\n");
      console.log("Primary key is " + key1 + " and primary value is " + object1[key1]);

      for (const key2 in object2) {
        console.log("Loop comparing second object");
        console.log("our key is " + key2 + " and our value is " + object2[key2]);

        if (key1 === key2) {
          console.log(`💛 Found matching keys: ` + key1 + " and " + key2);
          keyMatch = true;
        }
        //if the matching values are arrays, run a check thier internal values
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
          // console.log(`💙 Found arrays`);
          // console.log(object1[key1]);
          // console.log(object2[key2]);
          if (eqArrays(object1[key1], object2[key2])) {
            console.log(`💙 Found arrays with matching values: ` + object1[key1] + " and " + object2[key2]);
            valueMatch = true;
          } else {
            console.log(`💢 Array content mismatch`);
            return false;
          }
        }
        
        //if it is not an array, perform the check between primitives
        else if (Array.isArray(object1[key1]) === false) {
          if (object1[key1] === object2[key2]) {
            console.log(`🧡 Found matching values: ` + object1[key1] + " and " + object2[key2]);
            valueMatch = true;
          }
        }        
      }
      if (keyMatch === false || valueMatch === false) {
        console.log(`💢Either a key or value was mismatched at the end of this primary loop`);
        return false; // returns false if there is mismatch between keys and values across objects
      }
    }//---------------------------------------------loop------------------------------
  } else {
    console.log(`💢objects were of different length`);
    return false; // returns false if there is mismatch on number of keys
  }
  console.log(`🙏 Found no mismatches across objects`);
  return true; //returns a true if we dont encounter no mismatch
};



//As a continuation of the previous exercise, it's time to create our 
//assertObjectsEqual function which will help us easily test functions that return objects

// Implement assertObjectsEqual which will take in two objects and console.log 
// and appropriate message to the console. 


const assertObjectsEqual = function (object1, object2){
  console.log(object1);
  console.log(object2);


  
}