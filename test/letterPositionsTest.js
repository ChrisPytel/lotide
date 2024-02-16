//"letterPositionsTest.js A1 - refactored test assertions"

const assert = require('chai').assert;
const letterPositions = require('../letterPositions');



/*          Assertion tests        */

const sequenceA = letterPositions("hello");
// sequenceA.e should be [1]);

const sequenceB = letterPositions("lighthouse in the house");
// sequenceB.h should be [3,5,15,18]);

const sequenceC = letterPositions("I'm listening to chill lofi right now");
// sequenceB.x should be undefined as it doesnt appear in the string ^


//Mocha assertion Test runner code
describe("#letterPositions", () => {

  it("should return [1] for letter `e` in `hello`", () => {
    assert.deepEqual(sequenceA.e, [1]);
  });

  it("should return [3,5,15,18] for letter `h` in `lighthouse in the house`", () => {
    assert.deepEqual(sequenceB.h, [3, 5, 15, 18]);
  });

  it("should return undefined for letter `x` in `I'm listening to chill lofi right now`", () => {
    assert.isUndefined(sequenceC.x);
  });

});