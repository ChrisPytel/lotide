//"eqArraysTest.js A3 - Reformatted assertions to use mocha n chai"

// const assertEqual = require('../assertEqual'); // now using mocha for assertion tests
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


//Mocha assertion Test runner code
describe("#eqArrays", () => {

  it("should return true for if arrays match", () => {
    assert.isTrue(eqArrays([16, 32, 64, 128], [16, 32, 64, 128])); 
  }); 

  it("should return false for arrays with a mismatch", () => {
    assert.isFalse(eqArrays([77, 76, 42, 66, 34, 22], [77, 76, 42, 63, 34, 22])); 
  }); 

  it("should return false for arrays of different length", () => {
    assert.isFalse(eqArrays([77, 76, 42], [77, 76])); 
  }); 
});