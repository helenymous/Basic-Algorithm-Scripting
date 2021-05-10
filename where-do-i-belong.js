// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
// once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
// but less than 2 (index 1):

function getIndexToIns(arr, num) {
  let len = arr.length;
  let smallerCount = 0;
  for (let i = 0; i < len; i++) {
    if (num > arr[i]) {
      smallerCount++;
    }
  }
  return smallerCount;
}

getIndexToIns([40, 60], 50);


// Code Explanation

// I run a for loop counting whenever the num input is bigger than an arr input number.
// This number is equivalent to what num’s position would be in a sorted array.