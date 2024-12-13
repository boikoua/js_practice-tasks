// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]

const createPairElements = (arr) => {
  const newArr = arr;

  if (newArr.length % 2) {
    newArr.push(0);
  }

  const result = [];

  for (let i = 0; i < arr.length; i = i + 2) {
    let temp = '';

    for (let k = i; k < i + 2; k++) {
      temp += arr[k];
    }

    result.push(+temp);
  }

  return result;
};

console.log(createPairElements([1, 2, 3, 4, 5, 6]));
console.log(createPairElements([1, 2, 3, 4, 5, 6, 7]));
console.log(createPairElements([1, 2, 3, 4, 5, 6, 7, 8]));
