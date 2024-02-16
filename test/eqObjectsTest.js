//"eqObjectsTest.js A1 - added more mocha n chai edge case assertions"

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


const shirtA = { colors: "blue", size: "medium" };
const shirtB = { size: "medium", colors: "blue" }; 
//these are the same => Assert true

const dressA = { colors: ["red", "white"], size: "medium", pattern: "striped" };
const dressB = { colors: ["red", "white"], size: "medium", pattern: "striped"}; 
//these are the same and have matching arrays => Assert true

const dressC = { colors: ["red", "orange", "white"], size: "medium" };
//is different and has mismatched arrays => Assert false

describe("#eqObjects", () => {

  it("returns undefined if 1 or 0 parameters are passed in (shirtA)", () => {
    assert.isUndefined(eqObjects(shirtA)); 
  });

  it("returns true for objects with matching values (shirtA, shirtB)", () => {
    assert.isTrue(eqObjects(shirtA, shirtB)); 
  });
  
  it("returns false for objects with different values (shirtA, dressA)", () => {
    assert.isFalse(eqObjects(shirtA, dressA)); 
  });

  it("returns true for objects with matching values including matching array contents (dressA, dressB)", () => {
    assert.isTrue(eqObjects(dressA, dressB)); 
  });  

  it("returns false for objects with mismatched array contents (dressB, dressC)", () => {
    assert.isFalse(eqObjects(dressB, dressC)); 
  });  
  
});