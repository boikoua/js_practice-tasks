// Дано число. Получите массив делителей этого числа.

function arrayDivisions(num) {
  const res = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }

  return res;
}

console.log(arrayDivisions(100));
console.log(arrayDivisions(44));
