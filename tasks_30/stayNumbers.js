// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

const stayNumbers = (arr) => {
  const res = [];

  for (const num of arr) {
    const obj = {};
    const str = String(num);

    for (const el of str) {
      if (obj[el]) {
        obj[el] += 1;
      } else {
        obj[el] = 1;
      }
    }

    const values = Object.values(obj).every((item) => item <= 1);

    if (values) {
      res.push(num);
    }
  }

  return res;
};

console.log(stayNumbers([10, 444, 505, 1000, 205, 276]));
console.log(stayNumbers([10, 333, 805, 1000, 265, 376]));
