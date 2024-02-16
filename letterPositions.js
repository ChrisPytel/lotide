//"letterPositions.js A4 - refactored tests into test/letterPositionsTest.js and added module.exports = letterPositions"

//letterPostions takes in a string as its parameter and returns an object
//the function logs every time a letter appears in the string, and marks where it appears in the index.
//an object is compiled containing letters and their index numbers and is returned at the end

const letterPositions = function(sentence) {
  const results = {};
  let letterIndexNumber = 0;
  for (const letter of sentence) {
    // if a character that isnt a space is detected, pushes the the index#
    if (results[letter] && letter !== " ") results[letter].push(letterIndexNumber);    
    // if a character that isnt a space is detected, logs the index#
    else if (letter !== " ") results[letter] = [letterIndexNumber];
    letterIndexNumber++;
  }
  return results;
};

module.exports = letterPositions;  //exports our letterPositions function to communicate across modules