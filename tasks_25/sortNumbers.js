// Дано некоторое число: 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345

function sortNumbers(number) {
  return Number(String(number).split('').sort().join(''));
}

console.log(sortNumbers(35142));
console.log(sortNumbers(351429687));
