// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

function isElseDivisions(number) {
  const res = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      res.push(i);
    }
  }

  return res.length === 3 ? true : false;
}

console.log(isElseDivisions(100));
console.log(isElseDivisions(63));
console.log(isElseDivisions(9));
