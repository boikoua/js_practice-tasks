// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

function deleteWords(arr, count) {
  return arr.filter((item) => item.length <= count);
}

console.log(deleteWords(['hello', 'yes', 'no', 'take', 'happy'], 3));
