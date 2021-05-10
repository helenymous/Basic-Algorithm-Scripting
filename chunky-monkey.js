// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array:

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Code Explanation

// 1. First, we create an empty array arr2 where we will store our ‘chunks’.
// 2. The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// 3. Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can 
// use as indices to slice the array in the right locations.
// 4. Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
// 5. Finally, we return the value of arr2.