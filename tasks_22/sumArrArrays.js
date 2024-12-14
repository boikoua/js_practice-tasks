// Дан массив:[[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// Найдите сумму элементов этого массива.

const sumAllArrays = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arr[i].reduce((acc, item) => acc + item, 0);
    }
  }

  return sum;
};

console.log(
  sumAllArrays([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
