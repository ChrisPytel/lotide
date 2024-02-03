const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


/*    Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value. 
If no key with that given value is found, then it should return undefined.    */

  const findKeyByValue = function(showList, showToCheck){
    
     for (const show in showList){
      // console.log(show);
      console.log(showList[show]);

      if(showToCheck == showList[show]){
        console.log("📺 Yes, We got a match! 🍿");
        console.log(showList[show]+ " Matches with " + showToCheck);
        //confusing, but returns the key from the object, aka the genre in this case
        return show; 
      }
    }

  }



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
  comedy: "The Office"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), "fantasy"); // =>  pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Attack on Titan"), "anime"); // =>  fail