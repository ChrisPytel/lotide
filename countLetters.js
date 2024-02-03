// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }

};

// We will initialize an empty variable defined as an object and keep track of how
// many times our loop locates a letter. It will increment the value by 1 if it encounters it multiple times,
// otherwise the value will remain as 1.
const countLetters = function(sequence) {
  const counterList = {};

  for (const letter of sequence) {
    // console.log(letter);
    if (letter === " "){
      console.log("🌌 Encountered a space, not counting this");
    }
    else if (counterList[letter]) {
      // console.log("Exists already within counterList, adding +1 to its counter");
      counterList[letter]++;
    } else {
      // console.log("Doesnt exist in counterList yet, adding first entry");
      counterList[letter] = 1;
    }
  }
  
  return counterList;
};


//A few test cases
const sequence1 = countLetters("LHL");
console.log(sequence1);
const sequence2 = countLetters("Lighthouse Labs is pretty gosh darn cool");
console.log(sequence2);
const sequence3 = countLetters("Give life back to music");
console.log(sequence3);


assertEqual(sequence1['L'], 2);
assertEqual(sequence2["t"], 3);
assertEqual(sequence3.i, 3);