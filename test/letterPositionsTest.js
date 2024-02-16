//"letterPositionsTest.js added - for testing letterPostions.js"

const assert = require('chai').assert;
// const eqArrays = require('../eqArrays');     //using mocha n chai instead
// const assertArraysEqual = require('../assertArraysEqual'); 
const letterPositions = require('../letterPositions');



/*          Assertion tests        */

const sequenceA = letterPositions("hello");
// console.log(sequenceA);
// assertArraysEqual(letterPositions("hello").e, [1]);

const sequenceB = letterPositions("lighthouse in the house");
// console.log(sequenceB);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);

const sequenceC = letterPositions("Give life back to music");
// console.log(sequenceC);
// assertArraysEqual(letterPositions("Give life back to music").i, [1, 6 ,21]);


//Mocha assertion Test runner code
describe("#letterPositions", () => {

  it("should return [3,5,15,18] for letter `h` in `lighthouse in the house`", () => {
    assert.deepEqual(sequenceB.h, [3,5,15,18])
  }); 
  
  it("should return [3,5,15,18] for letter `h` in `lighthouse in the house`", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3,5,15,18])
  }); 

  it("should return [3,5,15,18] for letter `h` in `lighthouse in the house`", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3,5,15,18])
  }); 


});