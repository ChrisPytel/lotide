//"assertEqualTest.js A1 - Added comments and a type coercion test case"

const assertEqual = require('../assertEqual'); //imports the function from our assertEqual.js module 

//Test runner code
assertEqual("Labrador", "Golden Sheppard");   //Different strings test | Assert will FAIL
assertEqual(1, 1);                            //Identical strings test | Assert will PASS
assertEqual("Canada", "Canada");              //Identical strings test | Assert will PASS
assertEqual(16, 32);                          //Different numbers test | Assert will FAIL

assertEqual(12, "12");                        //String -> Integer type coercion test | Assert will FAIL