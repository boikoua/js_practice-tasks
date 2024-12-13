// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'

const stringSeparation = (str, count) => {
  const start = str.length % count;
  let result = str.slice(0, start);

  for (let i = start; i < str.length; i = i + count) {
    let temp = '';
    for (let k = i; k < i + count; k++) {
      temp += str[k];
    }
    result += ' ' + temp;
  }

  return result.trim();
};

console.log(stringSeparation('1234567', 3));
console.log(stringSeparation('12345678', 2));
