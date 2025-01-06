// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

const getUniqueArray = (min, max, n) => {
  const result = [];

  while (result.length < n) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result[result.length - 1] !== num) {
      result.push(num);
    }
  }

  return result;
};

console.log(getUniqueArray(50, 100, 10));
console.log(getUniqueArray(5, 10, 3));
