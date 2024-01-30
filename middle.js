

//Prints the result of eqArrays comparison algorithm.
const assertArraysEqual = function(arrA, arrB) {
  const comparisonResult = eqArrays(arrA, arrB);
  if (comparisonResult) {
    console.log(`✌ Assertion Passed: ${arrA} === ${arrB}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}\n`);
  }
};

//checks the contents of two arrays to see if they match
const eqArrays = function(arr1, arr2) {  
  if (arr1.length === arr2.length) {  //first checks if the arrays are of the same length  
    let arrayValueMatch = true; //sets the intial value as true.     
    //If it runs into a mismatch, sets it to false breaks the loop
    for (let i = 0; i < arr1.length; i++) {
      // logs for testing which value and datatype are checked
      // console.log(`Comparing: ${arr1[i]} which is dataype ${typeof arr1[i]} / ${arr2[i]} which is dataype ${typeof arr2[i]}`);
      if (arr1[i] === arr2[i]) {
        console.log("🤍 Values are the same across both indeces, so far arrayValueMatch remains: " + arrayValueMatch);
      } else if (arr1[i] !== arr2[i]) {
        arrayValueMatch = false;
        console.log("💔 Value mismatch, arrayValueMatch is now: " + arrayValueMatch);
        return false; //ends the loop early
      }
    }
    return true; //if all indices are equal// not required actually as on ln24 it breaks if false
  } else {
    //console.error("2 arrays passed in are not of equal length);
    return false;
  }  
};



//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function (arr){
  console.log("\nArray passed in is:");
  console.log(arr);
  const arrayMid = [];
  if (arr.length < 3){
    console.log("no middle found in arrays under size 3");
    return arrayMid;
  }
  else if(arr.length % 2 == 0){ //checks if length is even and returns middle 2 values
    console.log("Array.length is even, here are the middle 2 values:");

    arrayMid.push(arr[arr.length / 2]);
    arrayMid.push(arr[(arr.length + 2) / 2]);
  }
  else if (arr.length % 2 == 1){//checks if length is odd and returns 1 middle value
    console.log("Array.length is odd, here is the middle value:");
    arrayMid.push(arr[(arr.length + 1) / 2]);
  }
  console.log(arrayMid);
return arrayMid;
}

//For arrays with one or two elements, there is no middle. Returns an empty array.
// For arrays with even number of elements, will return the middle 2 values.
// For arrays with odd number of elements, will return only the middle value.

  // middle([1, 2]) // => []
  // middle([1, 2, 3]) // => [2]
  // middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) // => [7]
  // middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]) // => [9, 10]

//super longtests
  const reallyLongArray = [];
  const longArrayCount = 194; //must be greater than i declared in the for loop below
    for (i = 162; i< longArrayCount; i++){
    reallyLongArray.push(i);  
  }

middle(reallyLongArray);
  // console.log(middle(reallyLongArray));