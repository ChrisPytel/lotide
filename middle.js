//"middle.js A5 - Refactored away some console.logs, added comments"

// Middle takes in an array as an parameter and will returns the middle value of the array if its length is odd.
// Returns the 2 values from the middle of the array if the length is even
// Returns an empty array if its length is under 3 total indexes as there is no middle

const middle = function(arr) {
  const arrayMid = [];
  if (arr.length < 3) { //returns empty array if arr.l
    return arrayMid; 
  } else if (arr.length % 2 === 0) { //checks with modulus operator if our array is even
    arrayMid.push(arr[(arr.length - 2) / 2]);
    arrayMid.push(arr[arr.length / 2]); 
  } else if (arr.length % 2 === 1) { //checks with modulus operator if our array is odd
    arrayMid.push(arr[(arr.length - 1) / 2]);
  }
  return arrayMid;
};

module.exports = middle; //exports our middle function to communicate across modules