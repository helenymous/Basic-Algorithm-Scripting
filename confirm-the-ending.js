function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// Code Explanation

// 1. First we use the slice method copy the string.

// 2. In order to get the last characters in str equivalent to the target's length we use the slice method.

// 3. The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// For example str.slice(10, 17) would return give me.

// 4. In this case we only include one parameter which it will copy everything from the starting index.

// 5. We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.

// 6. Finally we compare the return result of slice to target and check if they have the same characters.
