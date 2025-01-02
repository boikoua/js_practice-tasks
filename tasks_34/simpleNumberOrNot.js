// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function simpleNumberOrNot(num) {
  if (!num) return "You can't divide by zero";
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }

  return count > 2 ? "The number isn't simple" : 'The number is simple';
}

console.log(simpleNumberOrNot(10));
console.log(simpleNumberOrNot(11));
console.log(simpleNumberOrNot(0));
