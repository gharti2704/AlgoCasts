// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('');
  return str.split('').reduce((reveserd, char) => char + reveserd, '');

  // const strArray = str.split('');
  // let reveserd = '';

  // for (let i = strArray.length - 1; i >= 0; i--) {
  //   reveserd += strArray[i];
  // }

  // for (let char of str) {
  //   reveserd = char + reveserd;
  // }

  // return reveserd;
}

module.exports = reverse;
