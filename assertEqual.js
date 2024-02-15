//"assertEqual.js A5 - Separated test driver code and placed into test/assertEqualTest.js"

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

module.exports = assertEqual;