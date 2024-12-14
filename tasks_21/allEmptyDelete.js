// Дан массив: [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

function allEmptyDelete(arr) {
  return arr.filter((item) => item);
}

console.log(allEmptyDelete([1, '', 2, 3, '', 5]));
