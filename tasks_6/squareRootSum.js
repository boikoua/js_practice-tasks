// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

const squareRootSum = (arr) => {
  return arr.reduce((acc, item) => acc + Math.sqrt(item), 0);
};

console.log(squareRootSum([9, 4, 49, 64]));
