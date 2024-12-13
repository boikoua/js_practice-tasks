// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'

const toUpperFirst = (str) => {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
};

console.log(toUpperFirst('aaa bbb ccc'));
