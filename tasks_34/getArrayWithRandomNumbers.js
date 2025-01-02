// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getArrayWithRandomNumbers(min = 0, max = 10, n = 10) {
  const result = [];

  for (let i = n; i > 0; i--) {
    result.push(getRandomNumber(min, max));
  }

  return result;
}

console.log(getArrayWithRandomNumbers());
console.log(getArrayWithRandomNumbers(10, 30, 3));
console.log(getArrayWithRandomNumbers(100, 178, 5));
