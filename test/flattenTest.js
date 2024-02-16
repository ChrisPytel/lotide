//"flattenTest.js A2 - linted away trailing spaces"

const assert = require('chai').assert;
const flatten = require('../flatten');


//Test runner code
const testArray1 = [1, 2, 3, 4, 5, 6];
// when flattened should return => [1, 2, 3, 4, 5, 6]
const testArray2 = [1, 2, [3, 4], 5, [6], [7, 8], [9], [10]];
// when flattened should return => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const superNestedArray = [1, [31, [[51], 42, [11, [[91], [12]]], 65, [31, 12], 44], 82,], 12];
// when flattened should return =>  [1, 31, 51, 42, 11, 91, 12, 65, 31, 12, 44, 82, 12]


//Mocha assertion Test runner code
describe("#flatten", () => {

  it("should return [1, 2, 3, 4, 5, 6] testArray1", () => {
    assert.deepEqual(flatten(testArray1), [1, 2, 3, 4, 5, 6]);
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for testArray2", () => {
    assert.deepEqual(flatten(testArray2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return [1, 31, 51, 42, 11, 91, 12, 65, 31, 12, 44, 82, 12] for superNestedArray", () => {
    assert.deepEqual(flatten(superNestedArray), [1, 31, 51, 42, 11, 91, 12, 65, 31, 12, 44, 82, 12]);
  });
});