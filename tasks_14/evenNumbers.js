// Дано число. Выведите в консоль количество четных цифр в этом числе.

const evenNumbers = (num) => {
  const res = Array.from(String(num)).filter((item) => {
    if (+item % 2 === 0) return item;
  }).length;

  return res;
};

console.log(evenNumbers(789674));
console.log(evenNumbers(789671024));
