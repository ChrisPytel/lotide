//"flattenTest.js created"

const flatten = require('../flatten');


//Test runner code
const testArray1 = [1, 2, [3, 4], 5, [6]];
console.log(`Flattened testArray1 is now: `, flatten(testArray1));
// output => [1, 2, 3, 4, 5, 6]

const testArray2 = [1, 2, [3, 4], 5, [6], [54, 12], [13], [14 , 16]];
console.log(`Flattened testArray2 is now: `, flatten(testArray2));
// output => 1, 2, 3, 4, 54, 6, 54, 12, 13, 14, 16

const reallyNestedArray = [1, 12, [31, [[31], 42, 11, [41 , 12, ], 65, [31, 12], 44], 82,], 33, 12];
console.log(`reallyNestedArray initially:`, reallyNestedArray);
console.log(`Flattened reallyNestedArray is now: `, flatten(reallyNestedArray));
// output =>  1, 12, 31, 31, 42, 11, 41, 12, 65, 31, 12, 44, 82, 33, 12