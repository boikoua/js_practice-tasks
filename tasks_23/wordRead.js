// Дано некоторое слово: 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

function wordRead(str) {
  return str === str.split('').reverse().join('');
}

console.log(wordRead('abcba'));
console.log(wordRead('abcda'));
