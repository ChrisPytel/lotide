//"findKey.js A4 - Cleaned logs and linted, also refactored tests into test/findKeyTest.js"

//findKey passes in an object and a callback as parameters
//It should return the first key that matches the callbacks parameter

const findKey = function(object, callback) {
  console.log(`\nOur original object is: `, object);
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;  //exports our findKey function to communicate across modules