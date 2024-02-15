//assertEqualTest.js created - Used to test assertEqual.js

const assertEqual = require('../assertEqual');

//Test runner code
assertEqual("Labrador", "Golden Sheppard");   //Different strings test
assertEqual(1, 1);                            //Identical strings test
assertEqual("Canada", "Canada");              //Identical strings test
assertEqual(16, 32);                          //Different numbers test