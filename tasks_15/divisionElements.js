// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

function divisionElements(arr) {
  const evenSum = arr
    .filter((item, index) => {
      if (index % 2 === 0) return item;
    })
    .reduce((acc, item) => acc + item);

  const oddSum = arr
    .filter((item, index) => {
      if (index % 2 !== 0) return item;
    })
    .reduce((acc, item) => acc + item);

  return evenSum / oddSum;
}

console.log(divisionElements([10, 1, 20, 2, 30, 3]));
