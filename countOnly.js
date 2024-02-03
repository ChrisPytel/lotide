// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }

};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results  = {};

  for (const item of allItems) {

    console.log("\nFirst loop, our guest is");
    console.log(item);
     

    if (itemsToCount[item]) { //checks the vip list, if any returns true, this resolves and continues
      console.log(`Is this guest a VIP?`);
      console.log(itemsToCount[item]);
      if (results[item]) { //if member already was pushed into the new obj, add +1 to count
        results[item] += 1;
      } else { //if member only appears once, list there only being 1 guest of that name
        results[item] = 1;
      }
    }
    
  }
  console.log("\nOur final list is:");
  console.log(results);
  return results;
};

//list of all guests
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


//vips to check against and thier status
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//checks
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);