// Дано число, например, вот такое:

let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

const positiveNumbers = (num) => {
  return Array.from(String(num)).every((item) => +item > 0);
};

console.log(positiveNumbers(num));
console.log(positiveNumbers(2310));
