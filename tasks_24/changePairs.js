// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]

const changePairs = (arr) => {
  for (let i = 1; i < arr.length; i = i + 2) {
    const first = arr[i - 1];
    const second = arr[i];

    arr[i - 1] = second;
    arr[i] = first;
  }

  return arr;
};

console.log(changePairs([1, 2, 3, 4, 5, 6]));
