// Дана некоторая строка: 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'

function deleteSymbols(str) {
  let result = '';
  let count = 1;

  str.split('').forEach((item) => {
    if (count < 3) {
      result += item;
      count++;
    } else {
      count = 1;
    }
  });

  return result;
}

console.log(deleteSymbols('abcdefg'));
