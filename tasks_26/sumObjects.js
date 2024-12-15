// Дан следующая структура:
let data = [
  {
    1: 11,
    2: 12,
    3: 13,
  },
  {
    1: 21,
    2: 22,
    3: 23,
  },
  {
    1: 24,
    2: 25,
    3: 26,
    4: 27,
  },
];
// Найдите сумму элементов этой структуры.

const sumObjects = (arr) => {
  let sum = 0;

  arr.forEach((obj) => {
    for (const key in obj) {
      sum += obj[key];
    }
  });

  return sum;
};

console.log(sumObjects(data));
