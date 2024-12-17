// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

function deleteTheSameElements(arr) {
  return Array.from(new Set(arr));
}

console.log(deleteTheSameElements([1, 2, 3, 4, 4, 1, 10, 8, 2]));
