// Дан массив с числами. Оставьте в нем только положительные числа.

const onlyPositiveOrNegative = (arr, symbol = '+') => {
  switch (symbol) {
    case '-':
      return arr.filter((item) => item < 0);
    default:
      return arr.filter((item) => item > 0);
  }
};

console.log(onlyPositiveOrNegative([1, 2, -100, -200, 500]));
console.log(onlyPositiveOrNegative([1, 2, -100, -200, 500], '-'));
