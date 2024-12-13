// Дана некоторая строка: 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'

const changeCase = (str) => {
  return str
    .split('')
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join('');
};

console.log(changeCase('AbCdE'));
console.log(changeCase('AbCdEggggGGG'));
