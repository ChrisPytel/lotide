//"withoutTest.js added - Refactored tests to use mocha n chai"

const assert = require('chai').assert;
const without = require('../without');

//Mocha assertion Test runner code
describe("#without", () => {

  it("should return [2, 3] if we take out [1] from [1, 2, 3]", () => {
    assert.deepEqual((without([1, 2, 3], [1])), [2, 3]); //=> pass assert
  });

  it("check without type coercion and should return [`1`, `2`] if we take out [1, 2, `3`] from [`1`, `2`, `3`]", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //=> pass assert
  });

});