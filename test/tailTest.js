//"tailtest.js created - used to test tail.js"

const assertEqual = require('../assertEqual');
const tail = require('../tail');


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