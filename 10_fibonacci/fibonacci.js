const fibonacci = function (num) {
  const array = [1, 1, 2];
  const int = parseInt(num);
  if (int > 0) {
    for (let i = 2; i <= int; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
  } else if (int < 0) {
    return "OOPS";
  } else return 0;
  return array[int - 1];
};

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Do not edit below this line
module.exports = fibonacci;
