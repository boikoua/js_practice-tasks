// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

const getRandomArray = (arr, n) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * arr.length);

    result.push(arr[index]);
  }

  return result;
};

console.log(getRandomArray([1, 2, 3, 4, 5], 5));
console.log(getRandomArray([10, 20, 30], 10));
