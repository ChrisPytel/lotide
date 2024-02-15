//"eqArraysTest.js A1 - Refactored and removed unnessecary tests"

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Runner code
assertEqual(eqArrays([16, 32, 64], [16, 32, 64]), true); // => should PASS Assertion check
assertEqual(eqArrays([77, 76, 42], [77, 76]), true); // =>different length arrays, should FAIL Assertion check
assertEqual(eqArrays([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]), false); // => should PASS assertion check
assertEqual(eqArrays("tomato", "tomAto"), true); // => should FAIL (also strings work here for some reason when checking arrays. Neat!)