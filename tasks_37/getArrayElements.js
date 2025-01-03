// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

function getArrayElements(arr1, arr2) {
  return Array.from(new Set(arr1)).filter((el) => arr2.includes(el));
}

console.log(
  getArrayElements([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [1, 5, 8, 8, 9])
);

console.log(getArrayElements([1, 1, 2, 3], [1, 5, 8, 8, 9]));
