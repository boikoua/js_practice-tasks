// Найдите сумму всех целых чисел от 1 до 100.

function sumAllInteger(start, finish) {
  let sum = 0;

  for (let i = start; i <= finish; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAllInteger(1, 100));
