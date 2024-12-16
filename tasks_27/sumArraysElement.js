// Дан следующая структура:
let data = [
  {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
  },
  {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
  },
  {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
  },
];
// Найдите сумму элементов этой структуры.

function sumArraysElement(arr) {
  let sum = 0;

  for (const obj of arr) {
    for (const key in obj) {
      for (const num of obj[key]) {
        sum += num;
      }
    }
  }

  return sum;
}

console.log(sumArraysElement(data));
