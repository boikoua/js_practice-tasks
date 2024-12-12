// Дано некоторое число: 12345
// Найдите сумму цифр этого числа.

function sumNumberElements(num) {
  return Array.from(String(num)).reduce((acc, item) => acc + +item, 0);
}

console.log(sumNumberElements(12345));
