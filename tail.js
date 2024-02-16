//"tail.js A2 - added comments"

//tail takes in an array, and returns the result of everything that isnt the first element
//index starts at 1, effectively ignoring index 0 of our array
//then it just pushes everything to our newArrayWithoutHead and returns our new array after loop completes

const tail = function(array) {
  const newArrayWithoutHead = [];
  for (let i = 1; i < array.length; i++) {  
    newArrayWithoutHead.push(array[i]); 
  }
  return newArrayWithoutHead;
};

module.exports = tail;  //exports our tail function to communicate across modules