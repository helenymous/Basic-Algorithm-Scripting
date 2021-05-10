// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word 
// is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of:

function titleCase(str) {
  let convertToArray = str.toLowerCase().split(" ");
  let result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

titleCase("I'm a little tea pot");

// Code Explanation
// We are making entire string lowercase and then converting it into array. Then we are using 
// map function to replace the lowercase character with uppercase. Finally, we are returning the
// string using join method.