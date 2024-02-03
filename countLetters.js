// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }

};


const countLetters = function(sequence) {
  const counterList = {};

  for (const letter of sequence) {
    console.log(letter);
    if (counterList[letter]) {
      console.log("Exists already within counterList, adding +1 to its counter");
      counterList[letter]++;
    } else {
      console.log("Doesnt exist in counterList yet, adding first entry");
      counterList[letter] = 1;
    }

  }
  return counterList;
};

const sequence1 = countLetters("Lighthouse Labs is pretty gosh darn cool");
console.log(sequence1);

const sequence2 = countLetters("ooga booga");
console.log(sequence2);





// The function should take in a sentence (as a string)
// and then return a count of each of the letters in that sentence.

// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

// Before implementing this function, we need to think about how it will report back these counts.
// It's not that we want to know how many H's are in this sentence?, because that would just be a number.
// We need it report back multiple numbers.