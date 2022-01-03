function consecutiveSubstrings(string) {
  // type your code here
  let result = []
  for(let i=0; i<string.length; i++){
    for(let j=i+1; j<=string.length; j++){
      result.push(string.slice(i, j))
    }
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']");
  console.log("=>", consecutiveSubstrings('abcd'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
