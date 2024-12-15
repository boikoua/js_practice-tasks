// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

function wordsWithLetter(text, letter) {
  return text
    .split(' ')
    .filter((word) => word.toLowerCase().includes(letter.toLowerCase()));
}

console.log(wordsWithLetter('Ella Hello Adam how are you my friend', 'a'));
