//"assertEqual.js A4 - Added module.export, commented out previous test driver code"

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

// assertEqual("Lighthouse Labs", "Bootcamp");   //Different strings test
// assertEqual(1, 1);                            //Identical strings test
// assertEqual("Canada", "Canada");              //Identical strings test
// assertEqual(16, 32);                          //Different numbers test

module.exports = assertEqual;