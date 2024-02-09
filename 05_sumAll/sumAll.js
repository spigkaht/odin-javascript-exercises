const sumAll = function (num1, num2) {
  let sum = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  if (num1 > num2) {
    let num3 = num1;
    num1 = num2;
    num2 = num3;
  }

  for (let i = num1; i <= num2; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
