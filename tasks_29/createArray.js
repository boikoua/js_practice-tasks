// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

function createArray(countArray, countElements) {
  const res = [];

  for (let i = 0; i < countArray; i++) {
    res.push([]);

    for (let k = 1; k <= countElements; k++) {
      res[i].push(k);
    }
  }

  return res;
}

console.log(createArray(3, 3));
console.log(createArray(3, 1));
