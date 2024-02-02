const tail = function(array) {
  const newArrayWithoutHead = [];
  for (let i = 1; i < array.length; i++) {
    newArrayWithoutHead.push(array[i]);
  }
  return newArrayWithoutHead;
};


const assertEqual = function(actual, expected) {
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

assertEqual(result.length, 2);        // should pass
assertEqual(result[0], "Lighthouse"); // should pass
assertEqual(result[1], "Labs");       // should pass

// tail of array with one element only should be empty, will pass the assert
assertEqual(tail(["test"]).length, 0);
// tail of an empty array should also be empty, will also pass the assert
assertEqual(tail([]).length, 0);