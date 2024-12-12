// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

function divisionOfNumbers(num1, num2) {
  return num1 % num2 === 0;
}

console.log(divisionOfNumbers(2024, 2024));
console.log(divisionOfNumbers(2032, 2024));
