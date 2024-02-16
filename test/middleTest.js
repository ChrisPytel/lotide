//"middleTest.js A3 - added more edge tests for mocha n chai"

const assert = require('chai').assert;
const middle = require('../middle');

//Test runner code
const longArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //array length is odd, should return [8]
const longArray2 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]; // array length is even, should return [36, 37]

//generates a customized SUPERLONG array of numbers from our intialized for loop contitions
  // const assertArraysEqual = require('../assertArraysEqual');  //using mocha instead
  // const reallyLongArray = [];
  // for (let i = 160; i <= 201; i++) reallyLongArray.push(i);  //middle of this should be 2 numbers [180, 181]
  // assertArraysEqual(middle(reallyLongArray), [180, 181]);// => Assert Passed!

//Mocha assertion Test runner code
describe("#middle", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });
  
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

  it("returns [8] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]", () => {
    assert.deepEqual(middle(longArray1), [8]); 
  });

  it("returns [36, 37] for [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]", () => {
    assert.deepEqual(middle(longArray2), [36, 37]); 
     
  });
});