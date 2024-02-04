const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}\n`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false!

const eqObjects = function(object1, object2){
   
  for(const key1 in object1){
    console.log('\n🙄 first loop, we have:');
    console.log(key1);
    console.log(object1[key1]);

    //iterates through the second object passed in
    for(const key2 in object2){
      console.log('2ndloop, we have:');
      console.log(key2);
      console.log(object2[key2]);


      if (object2[key2] ){
      }
    }
  }


  return true; //returns a true if we dont encounter a mismatch
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false


// assertEqual(eqObjects(shirtObject , longSleeveShirtObject));