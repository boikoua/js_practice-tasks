// Дана некоторая строка: 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'

const toUpper = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(toUpper('abcde'));
console.log(toUpper('abcdefg'));
