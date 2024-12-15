// Даны два числа. Получите массив общих делителей этих чисел.

function arrayGeneralDivisions(num1, num2) {
  const res = [];
  const maxDivisor = Math.min(num1, num2);

  for (let i = 1; i <= maxDivisor; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      res.push(i);
    }
  }

  return res;
}

console.log(arrayGeneralDivisions(44, 100));
console.log(arrayGeneralDivisions(66, 132));
