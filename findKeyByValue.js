const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}\n`);
  }
};


/*    Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.    */

const findKeyByValue = function(object, value) {
    
  for (const key in object) {
    console.log(key);
    console.log(object[key]);

    if (value === object[key]) {
      console.log("📺 WOW! We got a match! 🍿");
      console.log(object[key] + " Matches with " + value);
      //confusing, but returns the key from the object, aka the genre in this case
      return key;
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "Sons of Anarchy",
  mystery: "Stranger Things",
  animated: "Avatar: The Last Airbender",
  fantasy: "Game of Thrones",
  political: "House of Cards",
  foreign: "Squid Game",
  workplace_comedy: "The Office"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), "fantasy"); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Attack on Titan"), "anime"); // =>  fail