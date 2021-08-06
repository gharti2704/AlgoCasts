// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversedInt = 0;
  let isNegative = false;

  if (n < 0) {
    n = Math.abs(n);
    isNegative = true;
  }

  while (n > 0) {
    reversedInt = reversedInt * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  if (isNegative) {
    return -reversedInt;
  }
  return reversedInt;
}

module.exports = reverseInt;
