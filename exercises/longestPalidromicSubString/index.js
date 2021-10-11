const longestPalindromicSubString = (str) => {
  let longest = '';
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let [lPtr, rPtr] = [i, i];
    while (lPtr >= 0 && rPtr < str.length && str[lPtr] === str[rPtr]) {
      if (rPtr - lPtr + 1 > maxLength) {
        maxLength = rPtr - lPtr + 1;
        longest = str.slice(lPtr, rPtr + 1);
      }

      lPtr -= 1;
      rPtr += 1;
    }

    [lPtr, rPtr] = [i, i + 1];
    while (lPtr >= 0 && rPtr < str.length && str[lPtr] === str[rPtr]) {
      if (rPtr - lPtr + 1 > maxLength) {
        maxLength = rPtr - lPtr + 1;
        longest = str.slice(lPtr, rPtr + 1);
      }

      lPtr -= 1;
      rPtr += 1;
    }
  }

  return longest;
};

module.exports = longestPalindromicSubString;
