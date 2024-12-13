// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

function lastTheSameFirst(word1, word2) {
  return word1[word1.length - 1] === word2[0];
}

console.log(lastTheSameFirst('hello', 'opacity'));
console.log(lastTheSameFirst('margin', 'opacity'));
