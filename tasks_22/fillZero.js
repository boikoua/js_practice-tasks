// Дана некоторая переменная с числом:
let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'

const fillZero = (symbol, num) => {
  let res = '';

  for (let i = 0; i < num; i++) {
    res += symbol;
  }

  return res;
};

console.log(fillZero('0', num));
