//findKeyByValue.js A4 - "Refactored linted and removed console.logs"

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

/*    Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.    */

const findKeyByValue = function(object, value) {
  //console.log(`We are searching for ${value}\n`);
  for (const key in object) {
    //console.log(`Our key is:`,key ,`and our value is: `, object[key]);
    if (value === object[key]) {
      console.log("📺 WOW! We got a match! " + object[key] + " Matches with " + value);
      return key; //confusing, but returns the key from the object, aka the genre in this case
    }
  }
};

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

/*            assertions for testing             */

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Sopranos"), "drama"); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), "fantasy"); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Attack on Titan"), "anime"); // =>  fail