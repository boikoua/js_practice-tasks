// Дано некоторое число: 12345
// Получите массив цифр этого числа.

function arrayFromNumber(num) {
  return Array.from(String(num));
}

console.log(arrayFromNumber(12345));
