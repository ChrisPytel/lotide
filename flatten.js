




// Create a function flatten which will take in an array containing 
// elements including nested arrays of elements, and return a "flattened" version of the array. 

const flatten = function(arr){
  const flattendArray = [];
  console.log("starting array is: ");
  console.log(arr);

  for (let i = 0; i<arr.length; i++){
    console.log(`${arr[i]} is a ${typeof arr[i]}`);
    console.log(arr[i]);
    console.log(typeof arr[i]);

    //checks if the item within is a sub array
    if (Array.isArray(arr[i])){
    console.log("^ woah weve got a sub array here, lets break it down");

      //iterates within the subarray
      for (let i2 = 0; i2 < arr[i].length; i2++){
        console.log("internal array loop");
        console.log(arr[i][i2]);
        console.log(typeof arr[i][i2]);
        flattendArray.push(arr[i][i2]);
      }
    }     
    else {
      flattendArray.push(arr[i]);
    }
  }
  console.log("\nCompiled flattendArray is: ");
  console.log(flattendArray);
  return flattendArray;
}




flatten([1, 2, [3, 4], 5, [6]]); 
// => [1, 2, 3, 4, 5, 6]

// flatten([1, 2, [3, 4], 5, [6], [54, 12], [13], [14 , 16]]);
// => 1, 2, 3, 4, 54, 6, 54, 12, 13, 14, 16