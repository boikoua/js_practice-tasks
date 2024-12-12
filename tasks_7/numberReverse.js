// Дано некоторое число: 12345
// Переверните его: 54321

function numberReverse(num) {
  return Number(Array.from(String(num)).reverse().join(''));
}

console.log(numberReverse(12345));
