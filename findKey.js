//"findKey.js A5 - removed a console.log"

//findKey passes in an object and a callback as parameters
//It should return the first key that matches the callbacks parameter

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;  //exports our findKey function to communicate across modules