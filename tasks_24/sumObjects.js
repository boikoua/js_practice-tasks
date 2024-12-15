// Дан следующий объект:
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
// Найдите сумму элементов этого объекта.

const sumObjects = (obj) => {
  let sum = 0;

  for (let key in obj) {
    for (let el in obj[key]) {
      sum += obj[key][el];
    }
  }

  return sum;
};

console.log(sumObjects(obj));
