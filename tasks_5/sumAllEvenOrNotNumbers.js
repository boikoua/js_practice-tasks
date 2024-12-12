function sumAllEvenOrNotNumbers(start, finish, even = true) {
  let sum = 0;

  for (let i = start; i <= finish; i++) {
    if (even) {
      if (i % 2 === 0) {
        sum += i;
      }
    }

    if (!even) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  }

  return sum;
}

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

console.log(sumAllEvenOrNotNumbers(1, 100));

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

console.log(sumAllEvenOrNotNumbers(1, 100, false));
