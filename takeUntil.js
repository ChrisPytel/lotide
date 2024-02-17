//"takeUntil.js A4 - Refactored tests into test/takeUntillTest.js and added module.exports = takeUntil"

//  takeUntil takes in an array, and a callback, creates a new array of elements after
//  checking what our callback function requires, stopping when condition is met and returning the new array

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const element of array) {
    if (callback(element) === false) { //if the element is NOT equal to what our cb would return true on
      newArray.push(element);          //push that element into our newArray
    } else break; //ends the loop as soon as the callback hits a true return from our callback
  }
  return newArray;
};

module.exports = takeUntil;  //exports our takeUntil function to communicate across modules