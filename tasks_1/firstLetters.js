// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

function firstLetters(str1, str2) {
  const result = str1.slice(0, 1) === str2.slice(0, 1);
  return result ? 'true' : 'false';
}

console.log(firstLetters('hello', 'hello'));
console.log(firstLetters('good', 'hello'));
