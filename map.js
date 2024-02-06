//"map.js A1 - "

//Prints the result of the eqArrays comparison algorithm.
const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB))  console.log(`✅ Assertion Passed: ${arrA} === ${arrB}`);
   else console.log(`🛑 Assertion Failed: ${arrA} !==  ${arrB}`);  
};

//eqArrays takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {//first checks if the arrays are of the same length
    console.log("💥 Arrays are of different length, returning false");
    return false;  
  }
  for (let i = 0; i < arr1.length; i++) {
    // console.log("Comparing:", arr1[i], ` Datatype: ${typeof arr1[i]} with `, arr2[i], `Datatype: ${typeof arr2[i]}`);
    if (arr1[i] !== arr2[i]) {
      console.log("💥 Array values dont match, returning false");
      return false;
    }
  }  
  console.log("🤍 Values are the same across the arrays, returning true"); 
  return true;
};


//our initial array for the map function
const wordsList = ["How", "I", "wish", "you", "were", "here"];

// const test1 = wordsList.map(word => word[0]);
// console.log(test1);

const map = function(array, callback){
  const results = [];
  // console.log('array: ', array);              // temporary code
  // console.log('callback: ', callback);  

  for(const element of array){    
    // console.log('item BEFORE: ', element);
    // console.log('item AFTER: ', callback(element));
    results.push(callback(element));
  }  
  return results;
}

//We are passing in an array: wordsList
//And an anonymous arrow callback function whos parameter is word
const results1 = map(wordsList, word => word[0]);
console.log("Here is our results1: ", results1);


const results2 = map(wordsList, secondLetter => secondLetter[1]);
console.log("Here is our results2: ", results2);



/*                     test assertions                      */

assertArraysEqual(results1, ['H', 'I', 'w', 'y', 'w', 'h']); //=> pass assert
assertArraysEqual(results2, ['o', 'i', 'i', 'o', 'e', 'e']); //=> fail assert, one letter is undefined
