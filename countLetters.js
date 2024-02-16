//"countLetters.js A4 - updated comments"

//countletters takes in a string and counts how many time a particular letter appears inside
//it stores the letters and their total number of times it appears into an object, it returns the object at the end

const countLetters = function(sequence) {
  const letterTotal = {}; //empty placeholder for our object
  for (const letter of sequence) {
    //If it exists already within letterTotal, +1 to its count, also ignores spaces"
    if (letterTotal[letter] && letter !== " ") {
      letterTotal[letter]++;
    }
    ///If it doesnt exist in letterTotal yet, create an entry and assign 1, also ignores spaces"
    else if (letter !== " ") {
      letterTotal[letter] = 1;
    }
  }
  return letterTotal;
};

module.exports = countLetters; //exports our countLetters function to communicate across modules