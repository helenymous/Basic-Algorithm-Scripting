function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

// Code Explanation

// We create a new empty array.
// We use a for cycle to iterate over all elements of the provided array (arr).
// We use the if statement to check if the current element is truthy or falsy.
// If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
// We return the new array (newArray).