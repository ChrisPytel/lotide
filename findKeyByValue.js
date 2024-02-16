//"findKeyByValue.js A5 - Refactored our test cases into test/findKeyByValueTest.js"

//findKeyByValue takes in an object and a value.
//It iterates through the object and return the first key which contains the given value.
//If no key with that value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (value === object[key]) { //if a match is detected returns the key
      return key;
    }
  }
};

module.exports = findKeyByValue;  //exports our findKeyByValue function to communicate across modules