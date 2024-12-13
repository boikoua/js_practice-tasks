// Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56

function sumPairs(num) {
  let res = 0;
  const str = String(num);
  let temp = '';

  for (let i = 0; i < str.length; i++) {
    temp += str[i];

    if (temp.length === 2) {
      res += +temp;
      temp = '';
    }
  }

  return res;
}

console.log(sumPairs(123456));
