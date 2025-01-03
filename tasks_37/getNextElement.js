// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент.

function getNextElement(arr, el) {
  const index = arr.indexOf(el);

  if (index >= 0 && arr[index + 1]) {
    return arr[index + 1];
  } else if (index >= 0 && !arr[index + 1]) {
    return arr[0];
  }
}

console.log(getNextElement([1, 2, 3, 4, 5], 1));
console.log(getNextElement([1, 2, 3, 4, 5], 4));
console.log(getNextElement([1, 2, 3, 4, 5], 5));
