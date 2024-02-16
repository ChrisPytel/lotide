//"countOnly.js A3 - Refactored console.logs out and moved tests to test/countOnly.js"


// countOnly takes in two parameters
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// it will create a new object and log how many times that item appears, then returns results

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { //itemsToCount list, if any returns true, this resolves and continues
      if (results[item]) { //if item already was pushed into the new results object, add +1 to count
        results[item] += 1;
      } else { //if item only appears once in allItems, list there only being 1 item of that name
        results[item] = 1;
      }
    }    
  }
  return results;
};

module.exports = countOnly; //exports our countOnly function to communicate across modules