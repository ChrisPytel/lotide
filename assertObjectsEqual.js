//"assertObjectsEqual.js A5 - imported eqObjects module and refactored test into test/assertObjectsEqualTest.js"

const eqObjects = require('./eqObjects'); //imports our eqObjects.js module for this file

//assertObjectsEqual takes in two objects and console.logs if theyre equal or different,
//passes the objects through eqObjects first to check if they contain matching properties.

const assertObjectsEqual = function(object1, object2) {  
  const inspect = require('util').inspect; // <= add this line to get access to the inspect library
  const comparisonResult = eqObjects(object1, object2);
  
  if (comparisonResult) {
    console.log(`🥳 Object assertion passed: ${inspect(object1)} is the same as ${inspect(object2)}`);
  } else {
    console.log(`💥 Object assertion failed: ${inspect(object1)} is different from ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;  //exports our assertObjectsEqual function to communicate across modules