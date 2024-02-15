//"headTest.js created - Used to test head.js"

const assertEqual = require('../assertEqual');

//Test runner code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");