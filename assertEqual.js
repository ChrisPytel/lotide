//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

//Different strings test
assertEqual("Lighthouse Labs", "Bootcamp");
//Identical strings test
assertEqual(1, 1);
//Identical strings test
assertEqual("Canada", "Canada");
//Different numbers test
assertEqual(16, 32);