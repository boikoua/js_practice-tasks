// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.

function getMaxValues(arr) {
  const result = [];

  for (const array of arr) {
    result.push(Math.max(...array));
  }

  return result;
}

console.log(
  getMaxValues([
    [12, 13, 17, 11],
    [100, 200, 202, 78],
    [99, 78, 98],
  ])
);
