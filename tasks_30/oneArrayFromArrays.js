// Дан массив:

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Слейте элементы этого массива в один одномерный массив: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const oneArrayFromArrays = (arr) => {
  return arr.flat();
};

console.log(oneArrayFromArrays(arr));
