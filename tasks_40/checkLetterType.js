// Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.

const checkLetterType = (letter) => {
  const isCyrillic = /^[а-яёА-ЯЁ]$/.test(letter);

  const isLatin = /^[a-zA-Z]$/.test(letter);

  if (isCyrillic) {
    return "It's a cyrillic letter";
  } else if (isLatin) {
    return "It's a latin letter";
  } else {
    return "It isn't a letter";
  }
};

console.log(checkLetterType('Z'));
console.log(checkLetterType('Ё'));
console.log(checkLetterType(1));
