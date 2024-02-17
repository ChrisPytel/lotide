//"takeUntilTest.js added - updated assertions to use mocha n chai"

const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual'); //using mocha n chai instead
const takeUntil = require('../takeUntil');


//Test runner code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, number => number < 0);  //Expected Output [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); //Expected Output ['I've', 'been', 'to', 'Hollywood']


//Mocha assertion Test runner code
describe("#takeUntil", () => {

  it("should be [ 1, 2, 5, 7, 2 ] from results1", () => {
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]); //=> pass assert
  });

  it("should be [`I've`, `been`, `to`, `Hollywood`] from results2", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]); //=> pass assert
  });

});