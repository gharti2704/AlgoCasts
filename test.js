const findNumbers = (str) => {
  const stringNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = '';
  const digits = [0] * 10;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'z') {
      digits[0] += 1;
    }
    if (str[i] == 'w') {
      digits[2] += 1;
    }
    if (str[i] == 'g') {
      digits[8] += 1;
    }
    if (str[i] == 'x') {
      digits[6] += 1;
    }
    if (str[i] == 'v') {
      digits[5] += 1;
    }
    if (str[i] == 'o') {
      digits[1] += 1;
    }
    if (str[i] == 's') {
      digits[7] += 1;
    }
    if (str[i] == 'f') {
      digits[4] += 1;
    }
    if (str[i] == 'h') {
      digits[3] += 1;
    }
    if (str[i] == 'i') {
      digits[9] += 1;
    }
  }

  digits[7] -= digits[6];
  digits[5] -= digits[7];
  digits[4] -= digits[5];
  digits[1] -= digits[2] + digits[4] + digits[0];
  digits[3] -= digits[8];
  digits[9] -= digits[5] + digits[6] + digits[8];
};
