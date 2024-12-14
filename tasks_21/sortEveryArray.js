// Дан массив:[[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2]]
// Отсортируйте элементы в каждом подмассиве.

function sortEveryArray(arr) {
  return arr.map((item) => item.sort());
}

console.log(
  sortEveryArray([
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
  ])
);
