// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

function getArrayAllDividers(num) {
  const result = [];

  if (!num) return `You can't divide by zero`;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }

  return result;
}

console.log(getArrayAllDividers(10));
console.log(getArrayAllDividers(25));
