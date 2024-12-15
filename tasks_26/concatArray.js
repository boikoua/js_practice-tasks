// Дан некоторый массив, например, вот такой: [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const concatArray = (arr) => {
  const res = [];
  const prepareArrays = arr.map((item) => String(item).split(''));

  for (let i = 0; i < prepareArrays.length; i++) {
    for (let k = 0; k < prepareArrays[i].length; k++) {
      res.push(prepareArrays[i][k]);
    }
  }

  return res;
};

console.log(concatArray([123, 456, 789]));
