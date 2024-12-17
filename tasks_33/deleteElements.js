// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

function deleteElements(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

console.log(deleteElements([1, 8, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 8]));
