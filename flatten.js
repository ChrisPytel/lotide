//"flatten.js A2 - refactored logic within flatten to deal with infinitely nested arrays as well"

//flatten will take in an array as an argument (potentially containing many nested arrays)
//and return a single array with all of the values "flattened".
//Now contains logic for dealing with infinitely nested arrays via recursion and a new helper function within flatten

const flatten = function(arr) {
  const flattendArray = [];
  //defines a function so we can recursively 
  function nestedArrayFlattener(subArr) {
    for (let i = 0; i < subArr.length; i++) {
      if (Array.isArray(subArr[i])) { // if a subarray is detected recursively call nestedArrayFlattener
        nestedArrayFlattener(subArr[i]); // and pass in the nested arrays we are on in the for loop cycle
      } else {// if its a non-array elements push to flattendArray
        flattendArray.push(subArr[i]); 
      }
    }
  }  
  //call our nestedArrayFlattener helper and passes the initial array in
  nestedArrayFlattener(arr); 
  return flattendArray;
};



module.exports = flatten; //exports our flatten function to communicate across modules