//'findKeyTest.js added - used to test findKey.js, updated tests to mocha n chai"

const assert = require('chai').assert;
const findKey = require('../findKey');

//test runner variables for our mocha assertions

const restaurants = findKey({
  "Blue Hill": { stars: 1 },  
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Akaleri":   { stars: 5 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5); // => "Akaleri"

const pizzaPlaces = findKey({
  "Papa Johns":   { stars: 3 },
  "Pizza Hut":    { stars: 2 },
  "Dominos":      { stars: 3 },
  "Pizza Pizza":  { stars: 2 },
  "Otherside":    { stars: 4 },
  "241":          { stars: 1 },
  "Grazie Ristorante":      { stars: 5 }
}, x => x.stars === 4); // => "Otherside"

const civ6Leaders = findKey({
  "Julius":        "Ceasar",
  "Wilfred":       "Laurier",
  "Simon":         "Bolivar",
  "Otto":          "Von Bismark",
  "Alexander":     "the Great",
  "George":        "Washington",
  "Peter":         "the Great",
  "Mahatma":       "Ghandi"
}, x => x === "the Great"); // => "Alexander"


//Mocha assertion Test runner code
describe("#findKey", () => {

  it("returns `Akaleri` as our first 5 star restauraunt from the list", () => {
    assert.equal(restaurants, "Akaleri");
  });

  it("returns `Otherside` for a great 4 star pizza place in Toronto", () => {
    assert.equal(pizzaPlaces, "Otherside");
  });

  it("returns `Alexander` as the first leader in civ6 list with `The Great` suffix", () => {
    assert.equal(civ6Leaders, "Alexander");
  });
  
});