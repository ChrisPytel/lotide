# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published Chris Pytel as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chrispytel/lotide`

**Require it:**

`const _ = require('@chrispytel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

<b>The following functions are currently implemented:</b>

* `assertEqual` : AssertEqual checks two values against each other (strictly without type coercion). Prints the result to console if they are equal or not. <br><br>
* `assertArraysEqual` : assertArraysEqual asserts two arrays against each other utilizing the imported eqArrays module, prints the result of the assertions to the console if are equal or not. <br><br>
* `assertObjectsEqual` :  assertObjectsEqual takes in two objects and console.logs if theyre equal or different,passes the objects through eqObjects first to check if they contain matching properties. <br><br>
* `countLetters` : countletters takes in a string and counts how many time a particular letter appears inside, it stores the letters and their total number of times it appears into an object. Lastly, it returns the object. <br><br>
* `countOnly` : countOnly takes in two parameters<br> <b>allItems</b>: an array of strings that we need to look through.<br><b>itemsToCount</b>: an object specifying what to count. <br> It will create a new object and log how many times that item appears, then returns results. <br><br>
* `eqArrays` : eqArrays takes in two arrays and checks their values against each other. Returns true/false depending if the two arrays contents are an exact match. <br><br>
* `eqObjects` : eqObjects checks two objects against each other and returns true if both objects have identical keys and values, returns false if there is a mismatch. Contents within arrays are also checked if they match. Returns undefined if 1 or 0 parameters are passed in. <br><br>
* `findKey` : findKey passes in an object and a callback as parameters. It returns the first key that matches the callbacks parameter. <br><br>
* `findKeyByValue` : findKeyByValue takes in an object and a value. It iterates through the object and return the first key which contains the given value. If no key with that value is found, then it should return undefined. <br><br>
* `flatten` : flatten will take in an array as an argument (potentially containing many nested arrays) and return a single array with all of the values "flattened". Now contains logic for dealing with infinitely nested arrays via recursion and a new helper function within flatten. <br><br>
* `head` : head takes in an array as a parameter, and returns the first value found in it. <br><br>
* `tail` : tail takes in an array, and returns the result of everything that isnt the first element and returns a new array. <br><br>
* `middle` : Middle takes in an array and returns an new array containing the middle value or values. Returns the 1 value from the middle of the array if the length is odd. Returns the 2 values from the middle of the array if the length is even. Returns an empty array if its length is under 3 total indexes as there is no middle. <br><br>
* `letterPositions` : letterPostions takes in a string as its parameter and returns an object. The function logs every time a letter appears in the string, and marks where it appears in the index. An object is compiled containing letters and their index numbers and is returned at the end. <br><br>
* `map` : similar to the JS map() function, this version takes in an array as its parameter and returns a new array based on what we want the callback function to do with the elements from our initial array. <br><br>
* `takeUntil` : takeUntil takes in an array, and a callback, creates a new array of elements after checking what our callback function requires, stopping when condition is met and returning the new array. <br><br>
* `without` : without function returns a filtered array by taking in 2 parameters. <br>
<b>array:</b> an array that we want filtered.<br>
<b>removeThis:</b> an array that contains elements to remove from our first array.<br>