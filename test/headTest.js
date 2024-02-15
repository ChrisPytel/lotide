//"headtest.js A2 - updated comments"

const assertEqual = require('../assertEqual');
const head = require('../head');

//Test runner code

assertEqual(head([5,6,7]), 5);  
//5 is the first item in the array - Assert PASS   
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
//"Hello is the first item in the array - Assert PASS