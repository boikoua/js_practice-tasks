// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

function lastUpperCase(str) {
  return str
    .split(' ')
    .map(
      (item) =>
        item.slice(0, item.length - 1) + item[item.length - 1].toUpperCase()
    )
    .join(' ');
}

console.log(lastUpperCase('hello my brother how are you'));
