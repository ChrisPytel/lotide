

const head = function(value) {
  console.log(value[0]);
  const firstIndexItem = value[0];
  console.log("first item in the index is : " + typeof firstIndexItem); //checks datatype
  return firstIndexItem;
};


const assertEqual = function(actual, expected) {
  // console.log(actual);
  // console.log(expected);
  if (actual === expected) {
    console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  } else {
    console.log("something isnt correct");
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");







