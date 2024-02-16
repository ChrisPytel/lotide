//"headtest.js A2 - refactored tests to use mocha n chai"

// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head = require('../head');



//Chai assertion Test runner code
describe("#head", () => {

  it("returns 5 for [5, 6, 7, 8]", () => {
    assert.strictEqual(head([5, 6, 7, 8]), 5);
  });

  it("returns 'hello' for [`Hello`, `Lighthouse`, `Labs`]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  
});