const NUMERAL_VALUES = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}

function converter(romanString) {
  const numeralArray = romanString.split("");
  let result = 0;
  for (let i = 0; i < numeralArray.length; i++) {
    let current = numeralArray[i];
    let next = numeralArray[i + 1];
    if (NUMERAL_VALUES[current] < NUMERAL_VALUES[next]) {
      result += (NUMERAL_VALUES[next] - NUMERAL_VALUES[current]);
      // Skip character already used,could also alternatively remove characters from string then proceed
      i += 1;
    }
    else {
      result += NUMERAL_VALUES[current]
    }
  }
  return result;
}

module.exports = converter;