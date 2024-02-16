//"countOnlyTest.js - Refactored to use mocha n chai testing"

// const assertEqual = require('../assertEqual'); // no longer needed with mocha tests
const assert = require('chai').assert;
const countOnly = require('../countOnly');

//Test runner code

//our list of all guests
const guestList = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//guests to check against and thier status if they are a VIP or not
const vipList = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

//counts the result
const result1 = countOnly(guestList, vipList);

//Mocha assertion Test runner code
describe("#countOnly", () => {

  it("should count Jason as only appearing 1 time", () => {
    assert.equal(result1["Jason"], 1); 
  });

  it("should returned undefined for Karima", () => {
    assert.equal(result1["Karima"], undefined); 
  }); 

  it("should count Fang as appearing 2 times", () => {
    assert.equal(result1["Fang"], 2); 
  });
});