//"findkey.js added"

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};



//passes in an object and a callback, should return the first key that matches the callbacks parameter
const findKey = function(object, callback){
  console.log(`our original object`, object);

  for(const key in object){
    if (callback(key)){
      
      console.log(`found our match, it is: `);
    }
    else{
      console.log(`no match found here`, key);
    }    
  }
}


 findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

