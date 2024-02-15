//"tail.js A1 - Refactored test cases into test/tailTest.js, and added line 11 - module.export = tail"

const tail = function(array) {
  const newArrayWithoutHead = [];
  for (let i = 1; i < array.length; i++) {
    newArrayWithoutHead.push(array[i]);
  }
  return newArrayWithoutHead;
};

module.exports = tail;