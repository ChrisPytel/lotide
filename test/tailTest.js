//"tailtest.js created - edited test cases to utilize mocha n chai"

// const assertEqual = require('../assertEqual');   // using mocha instead
const assert = require('chai').assert;
const tail = require('../tail');

//Test runner code
const wordsList = ["Yo Yo", "Lighthouse", "Labs"]; // => would return ["Lighthouse", "Labs"]
const numberList = [2, 4, 8, 16, 32, 64]; // => would return [4, 8, 16, 32, 64]

//Mocha assertion Test runner code
describe("#tail", () => {

  it("returns empty array if initial array is empty", () => {
    assert.deepEqual(tail(["Hello"]), []); 
  });

  it("returns empty array if initial array has only 1 value", () => {
    assert.deepEqual(tail([]), []); 
  }); 

  it("returns [`Lighthouse`, `Labs`] from [`Yo Yo`, `Lighthouse`, `Labs`]", () => {
    assert.deepEqual(tail(wordsList), ["Lighthouse", "Labs"]); 
  });

  it("returns [4, 8, 16, 32, 64] from [2, 4, 8, 16, 32, 64]", () => {
    assert.deepEqual(tail(numberList), [4, 8, 16, 32, 64]); 
  });
  
});