// Дан массив с числами. Найдите сумму положительных элементов этого массива.

const sumPositiveElements = (arr) => {
  return arr.filter((item) => item >= 0).reduce((acc, item) => acc + item);
};

console.log(sumPositiveElements([10, -5, 0, 5, 100, -70, 0, 54]));
