//"assertEqual.js A6 - Readded curlybraces for readbility and added comments"

//AssertEqual checks two values against each other (strictly without coercion)
//Console.logs the result if they match or not

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }   
  else{
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }   
};

module.exports = assertEqual; //exports our assertEqual function to communicate across modules