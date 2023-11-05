function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length/2; i++){
    const e = word.length - 1 - i;
    if(word[i] !== word[e]){
      return false;
    }
    return true;
  }
}

/* 
  Add your pseudocode here
  
  funtion that takes in string argument
  create for loop that iterates half of given word
  create if statement for comparing one half of word to second half of word
  return false if each half of words do not equal eachother
  return true if they do

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
