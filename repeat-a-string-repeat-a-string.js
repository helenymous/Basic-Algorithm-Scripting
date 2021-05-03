function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

// Code Explanation

// This solution uses recursion.
// We check if num is negative and return an empty string if true. If not, we add the string to a call of our 
// function with num being decreased by 1, which will add another str and another… until eventually num is 1. 
// And return that whole process.

