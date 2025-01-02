// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

function getAllDividers(num) {
  if (!num) return "You can't divide by zero";

  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
}

console.log(getAllDividers(10));
console.log(getAllDividers(25));
console.log(getAllDividers(100));
console.log(getAllDividers(0));
