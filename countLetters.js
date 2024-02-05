const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

// We will initialize an empty variable defined as an object and keep track of how
// many times our loop locates a letter. It will increment the value by 1 if it encounters it multiple times,
// otherwise the value will remain as 1.
const countLetters = function(sequence) {
  const letterTotal = {};
  for (const letter of sequence) {
    //If it exists already within letterTotal, +1 to its count, also skips spaces"
    if (letterTotal[letter] && letter !== " ")   letterTotal[letter]++;    
    ///If it doesnt exist in letterTotal yet, create an entry and assign 1, also skips spaces"
    else if (letter !== " ") letterTotal[letter] = 1;
  }
  return letterTotal;
};

//A few test cases
const sequence1 = countLetters("LHL");
// console.log(sequence1);
const sequence2 = countLetters("Lighthouse Labs is pretty gosh darn cool");
// console.log(sequence2);
const sequence3 = countLetters("Give life back to music");
// console.log(sequence3);

assertEqual(sequence1['L'], 2);
assertEqual(sequence2["t"], 3);
assertEqual(sequence3.i, 3);