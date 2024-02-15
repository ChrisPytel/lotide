//"flatten.js A1 - Refactored flatten logic, and exports the module. Moved test cases into test/flattenTest.js"

//flatten will take in an array as an argument (possibly containing nested arrays)
//and return a single array with all of the values "flattened".

const flatten = function(arr) {
  const flattendArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {  //checks if the value is an array      
      for (let i2 = 0; i2 < arr[i].length; i2++) { //goes thru subarrays and pushes them 
        flattendArray.push(arr[i][i2]);
      }
    } else { //if its not a nested subarray, push the value into our flattenArray as normal
      flattendArray.push(arr[i]); 
    }
  }
  return flattendArray;
};

module.exports = flatten; //exports our flatten function to communicate across modules