//"map.js A2 - Refactored assertion cases into test/mapTest.js and added module.exports = map"

//similar to the JS map() function, our version takes in an array as its parameter and returns a new array
//based on what we want the callback function to do with the elements from our initial array

const map = function(array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

module.exports = map;  //exports our map function to communicate across modules