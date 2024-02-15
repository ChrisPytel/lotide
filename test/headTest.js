//"headtest.js A1 - added line 4- const head = require('../head')"

const assertEqual = require('../assertEqual');
const head = require('../head');

//Test runner code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");