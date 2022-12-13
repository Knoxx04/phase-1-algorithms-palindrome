function isPalindrome(word) {
  // Write your algorithm here
  
    const reversed = word.split("").reverse().join("");
    if (reversed === word)
    return true;

    return false;

}

//isPalindrome("racecar")
/* 
  Add your pseudocode here
  write function that,
  when word is reversed
  to equal the word
  word === reversed word
  and return true
  
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

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;





