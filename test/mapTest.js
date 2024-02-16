//"mapTest.js added - updated assertions to use mocha n chai"

const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual'); //using mocha n chai instead
const map = require('../map');



//Test runner code
const wordsList = ["How", "I", "wish", "you", "were", "here"];

//We are passing in an array: wordsList
//And an anonymous arrow callback function whos parameter is letter
const results1 = map(wordsList, letter => letter[0]);
// console.log("Here is our results1: ", results1);

const results2 = map(wordsList, secondLetter => secondLetter[1]);
// console.log("Here is our results2: ", results2);


//Mocha assertion Test runner code
describe("#map", () => {

  it("should return ['H', 'I', 'w', 'y', 'w', 'h']  for results1", () => {
    assert.deepEqual(results1, ['H', 'I', 'w', 'y', 'w', 'h']); //=> pass assert
  });

  it("should return ['o', undefined, 'i', 'o', 'e', 'e'] for  result2", () => {
    assert.deepEqual(results2, ['o', undefined, 'i', 'o', 'e', 'e']); //=> pass assert
  });

});