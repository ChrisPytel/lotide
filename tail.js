const tail = function(array) {
  // console.log(array);
 const newArrayWithoutHead = []; 

  for( let i = 1; i < array.length; i++){
    // console.log(i);
    // console.log(array[i]);
    newArrayWithoutHead.push(array[i]);
  }
  console.log(newArrayWithoutHead);
  return newArrayWithoutHead;
};


const assertEqual = function(actual, expected) {
  console.log(actual);
  console.log(expected);
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


// Test Case A: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case B: Checking the returned array elements
const result = tail(["Hello","Lighthouse","Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");