function isPalindrome(word) {
  // Write your algorithm here

  // convert string to an array
  const arrayValues = word.split("");

  // do a reverse on the array values
  const reverseArrayValues = arrayValues.reverse();

  // converts array to a string
  const reverseString = reverseArrayValues.join("");

  if (word == reverseString) {
    console.log("It is a palindrome");
    return true;
  } else {
    console.log("It is not a palindrome");
    return false;
  }
}

isPalindrome("robot");
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
