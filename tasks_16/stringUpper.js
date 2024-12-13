// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

const stringUpper = (str) => {
  let result = str.split(' ');

  for (let i = 0; i < result.length; i++) {
    if (i % 2) {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }
  }

  return result.join(' ');
};

console.log(stringUpper('aaa bbb ccc eee fff'));
