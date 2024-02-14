const palindromes = function (string) {
  const array = [...string];
  const arrayLength = [...string];
  const newArray = [];
  const punctuation = [
    ".",
    ",",
    ";",
    ":",
    "!",
    "?",
    '"',
    "'",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "-",
    "_",
  ];
  for (let i = arrayLength.length - 1; i >= 0; i--) {
    if (!punctuation.includes(array[i])) {
      const letter = array.shift();
      newArray.unshift(letter);
    }
  }
  const finalArray = newArray.join("");
  return finalArray === string;
};

// Do not edit below this line
module.exports = palindromes;
