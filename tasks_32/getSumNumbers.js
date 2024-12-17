// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

const getSumNumbers = (num) => {
  return Array.from(String(num)).reduce((acc, item) => acc + +item, 0);
};

console.log(getSumNumbers(777));
console.log(getSumNumbers(567));
