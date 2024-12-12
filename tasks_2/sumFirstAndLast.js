// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

const sumFirstAndLast = (num) => {
  const first = String(num)[0];
  const last = String(num)[String(num).length - 1];
  const sum = +first + +last;

  return sum;
};

console.log(sumFirstAndLast(2024));
console.log(sumFirstAndLast(2025));
