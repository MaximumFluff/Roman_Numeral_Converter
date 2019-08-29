const numeralCount = {
  "I": 0,
  "V": 0,
  "X": 0,
  "L": 0,
  "C": 0,
  "D": 0,
  "M": 0,
}

const romanNumerals = Object.keys(numeralCount);

function checkString(romanString) {
  // If invalid character, throw error
  for (let char of toUpperCase(romanString)) {
    if (romanNumerals.indexOf(char) < 0) {
      return false
    }
    else {
      // Increase count
      numeralCount[char] += 1;
    }
  }

  // If too many of I, X, C, M throw false
  if (numeralCount.I > 3 || numeralCount.X > 3 || numeralCount.C > 3 || numeralCount.M > 3) {
    return false;
  }

  else {
    return true;
  }
}

module.exports = checkString;