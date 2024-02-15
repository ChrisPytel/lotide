//"eqArraysTest.js A2 - updated some test runner code"

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Runner code
assertEqual(eqArrays([16, 32, 64], [16, 32, 64]), true); // => should PASS Assertion check
assertEqual(eqArrays([77, 76, 42], [77, 76]), false); // => different length arrays, should PASS Assertion check
assertEqual(eqArrays([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22]), false); // => should PASS assertion check