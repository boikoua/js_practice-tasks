// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

const divisionOnePartOnTwoPart = (arr) => {
  const middle = arr.length / 2;

  let sumFirstPart = [...arr]
    .splice(0, middle)
    .reduce((acc, item) => acc + item);
  let sumSecondPart = [...arr]
    .splice(middle - 1)
    .reduce((acc, item) => acc + item);

  console.log(sumFirstPart, sumSecondPart);

  return sumFirstPart / sumSecondPart;
};

console.log(divisionOnePartOnTwoPart([1, 2, 3, 4, 5, 6]));
