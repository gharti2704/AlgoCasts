/*
Given a string s, sort it in decreasing order based on the frequency of the characters. 
The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/

const frequencySort = (s) => {
  const strs = {};

  for (let char of s) {
    char in strs ? (strs[char] += char) : (strs[char] = char);
  }

  const arrayOfStrs = Object.values(strs).sort((a, b) => b.length - a.length);

  return arrayOfStrs.join('');
};