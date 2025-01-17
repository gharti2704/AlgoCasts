// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
  };

  let result = 0;

  for (let char of str) {
    if (char.toLowerCase() in vowels) {
      result++;
    }
  }

  return result;
}

module.exports = vowels;
