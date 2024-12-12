// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

function lastLetter(str) {
  const lastLetter = str[str.length - 1];

  switch (lastLetter) {
    case 'ь':
      return str[str.length - 2];
    default:
      return lastLetter;
  }
}

console.log(lastLetter('привет'));
console.log(lastLetter('снять'));
