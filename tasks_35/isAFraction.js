// Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

const isAFraction = (value) => {
  const number = Number(value);

  if (isNaN(number)) return "It isn't a number";

  return Number.isInteger(number)
    ? "It isn't a fraction number"
    : "It's a fraction number";
};

console.log(isAFraction('12.45'));
console.log(isAFraction('dima'));
console.log(isAFraction('12'));
