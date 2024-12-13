// Дан массив. Удалите из него элементы с заданным значением.

function deleteFromArray(arr, value) {
  return arr.filter((item) => item !== value);
}

console.log(deleteFromArray([1, 2, 3, 4, 5], 5));
console.log(deleteFromArray(['from', 'to', 'hello', 'why', 'happen'], 'hello'));
