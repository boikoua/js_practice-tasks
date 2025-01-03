// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function getSortWords(text) {
  return text
    .split(' ')
    .sort((a, b) => a.localeCompare(b))
    .join(' ');
}

console.log(
  getSortWords('text may tea car apple pineapple smart clever book strong')
);
