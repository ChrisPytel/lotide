//"findKeyByValueTest.js added - for testing findKeyByValue.js"

// const assertEqual = require('../assertEqual'); // now using mocha for assertion tests
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

//Object created for testing mocha assertions
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Sopranos",
  mystery: "Stranger Things",
  action: "Sons of Anarchy",
  workplaceComedy: "The Office",
  fantasy: "Game of Thrones",
  political: "House of Cards",
  foreign: "Squid Game",
  animated: "Avatar: The Last Airbender"
};


//Mocha assertion Test runner code
describe("#findKeyByValue", () => {

  it("should return category `drama` for the `The Sopranos`", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Sopranos"), "drama");  // =>  pass
  }); 

  it("should return undefined for `Attack on Titan`", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "Attack on Titan")); // => undefined
  }); 

  it("should return `fantasy` for `Game of`", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), "fantasy"); // =>  pass
  }); 
});