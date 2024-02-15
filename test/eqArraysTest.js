//"eqArraysTest.js created - used to test eqArrays.js"

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Runner code

//for testing eqArrays on its own
eqArrays([32, 12, 42], [32, 12, 42]); // => true
eqArrays([77, 76, 42], [77, 76, 46]); // => false
eqArrays([77, 76, 42], [77, 76]); // => false, different length arrays
eqArrays([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]); // => false

//for testing eqArrays in conjunction with assertEqual
assertEqual("tomato", "tomAto"); // => should FAIL (also strings work here for some reason when checking arrays. Neat!)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS  Assertion check
assertEqual(eqArrays([16, 32, 64], [16, 32, 128]), true); // => should FAIL Assertion check