// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

function getSumDivisions(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(getSumDivisions(10));
console.log(getSumDivisions(36));
