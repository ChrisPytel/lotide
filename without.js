//"without.js A2 - Refactored away console.logs and moved tests into test/withoutTest.js"

//without takes in an array and iterates over it while copying elements to a filteredArray to return later,
//The function omits writing anything found across the removeThis array
//When complete, it returns the filtered array

const without = function(arr, removeThis) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isMatch = false;
    for (let i2 = 0; i2 < removeThis.length; i2++) { //checks against the removeThis array for elements to flag and skip
      if (arr[i] === removeThis[i2]) {
        isMatch = true; //match located, flags this element as safe to skip pushing to our filteredArray
        break;
      }
    }
    if (!isMatch) { //if by the end of second loop there is no match, pushes that element into our filteredArray
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

module.exports = without;  //exports our without function to communicate across modules