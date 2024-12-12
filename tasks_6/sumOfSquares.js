// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const sumOfSquares = (arr) => {
  return arr.reduce((acc, item) => acc + Math.pow(item, 2), 0);
};

console.log(sumOfSquares([1, 2, 3, 4, 5]));
