// Дан следующий объект:
let obj = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  },
};
// Найдите сумму элементов этого объекта.

function sumObjects(obj) {
  let sum = 0;

  for (let i in obj) {
    for (let j in obj[i]) {
      for (let k in obj[i][j]) {
        sum += obj[i][j][k];
      }
    }
  }

  return sum;
}

console.log(sumObjects(obj));
