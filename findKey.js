//"findKey.js A3 - Refactored and added more test cases, commented console.logs"

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

//passes in an object and a callback, should return the first key that matches the callbacks parameter
const findKey = function(object, callback) {
  console.log(`\nOur original object is: `, object);
  for (const key in object) {
    if (callback(object[key])) {
      // console.log(`Found our match, it is: `, key);
      return key;
    } // else console.log(`No match found here at: `, key);
  }
};

const restaurants = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const pizzaPlaces = findKey({
  "Papa Johns":   { stars: 4 },
  "Pizza Hut":    { stars: 2 },
  "Dominos":      { stars: 3 },
  "Pizza Pizza":  { stars: 2 },
  "Otherside":    { stars: 5 },
  "241":          { stars: 1 },
  "Grazie Ristorante":      { stars: 5 }
}, x => x.stars === 5); // => "Otherside"


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


/*       assertions for testing         */

assertEqual(restaurants, "noma");// => True
assertEqual(pizzaPlaces, "Otherside");// => True
assertEqual(civ6Leaders, "Alexander");// => True