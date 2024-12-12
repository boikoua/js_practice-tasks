// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

const theSame = (num1, num2) => {
  const first = String(num1)[0];
  const last = String(num2)[0];

  return first === last;
};

console.log(theSame(100, 107));
console.log(theSame(300, 107));
