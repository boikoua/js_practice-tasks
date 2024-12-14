// Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'

const changeFirstSymb = (str) => {
  return str
    .split(' ')
    .map((item) => (item = '!' + item.slice(1)))
    .join(' ');
};

console.log(changeFirstSymb('abcde abcde abcde'));
console.log(changeFirstSymb('hello why happen'));
