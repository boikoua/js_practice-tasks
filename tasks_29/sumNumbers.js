// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

function sumNumbers(start, finish, num) {
  const res = [];

  for (let i = start; i <= finish; i++) {
    let sum = 0;
    const str = String(i);

    for (const n of str) {
      sum += +n;
    }

    if (sum === num) {
      res.push(i);
    }
  }

  return res;
}

console.log(sumNumbers(1, 1000, 13));
console.log(sumNumbers(100, 900, 24));
