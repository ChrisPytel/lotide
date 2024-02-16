//"eqObjectsTest.js added - used for testing eqObjects.js"

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');



const shirtA = { colors: "blue", size: "medium" };
const shirtB = { size: "medium", colors: "blue" }; 
//these are the same  => Assert true

const stripedShirtA = { colors: ["red", "white"], size: "medium" };
const stripedShirtB = { colors: ["red", "white"], size: "medium" }; 
//these are the same and have matching arrays=> Assert true

const shirtE = { colors: ["red", "blue"], size: "medium" };
const shirtF = { size: "medium", colors: ["red", "blue"] }; //these are the same  => Assert true



// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false


describe("#eqObjects", () => {

  it("returns true for objects with matching values (shirtA, shirtB)", () => {
    assert.isTrue(eqObjects(shirtA, shirtB)); 
  });
  
  it("returns false for objects with different values (shirtA, stripedShirtA)", () => {
    assert.isTrue(eqObjects(shirtA, stripedShirtA)); 
  });
  
});