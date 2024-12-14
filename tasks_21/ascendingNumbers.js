// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

function ascendingNumbers(num) {
  const sortNum = Number(
    String(num)
      .split('')
      .sort((a, b) => +a - +b)
      .join('')
  );

  return num === sortNum;
}

console.log(ascendingNumbers(123456789));
console.log(ascendingNumbers(126789));
console.log(ascendingNumbers(12526789));
