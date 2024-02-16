//countLettersTest.js added - brought in tests from original file

const assert = require('chai').assert;
const countLetters = require('../countLetters');


//A few test cases
const sequence1 = countLetters("LHL");
const sequence2 = countLetters("Lighthouse Labs is pretty gosh darn cool");
const sequence3 = countLetters("Misty mountains mesmerize my mind,");

//Mocha assertion test runner code
describe("#countletters", () => {

  it("returns 2 for how many times `L` appears in `LHL`", () => {
    assert.equal(sequence1['L'], 2); 
  });

  it("returns 4 for how many times `o` appears in `Lighthouse Labs is pretty gosh darn cool`", () => {
    assert.equal(sequence2["o"], 4); 
  });

  it("returns 1 for how many times M appears in `Misty mountains mesmerize my mind,`", () => {
    assert.equal(sequence3.M, 1); 
  });

});