// Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

const identicalElements = (arr) => {
  let elem = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (elem === arr[i]) return true;
    if (elem !== arr[i]) {
      elem = arr[i];
    }
  }

  return false;
};

console.log(identicalElements([1, 2, 3, 3, 4, 5]));
console.log(identicalElements([1, 2, 3, 4, 5, 3, 5, 5]));
