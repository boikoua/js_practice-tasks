// Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.

function checkNumbers(num, even = true) {
  if (even) {
    return String(num)
      .split('')
      .every((item) => +item % 2 === 0);
  } else {
    return String(num)
      .split('')
      .every((item) => +item % 2 !== 0);
  }
}

console.log(checkNumbers(1357, false));
console.log(checkNumbers(1357));
console.log(checkNumbers(2024));
