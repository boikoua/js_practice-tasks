// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

function sumFirstPart(arr) {
  let sum = 0;
  const middleFromArr = arr.length / 2;

  for (let i = 0; i < middleFromArr; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumFirstPart([1, 2, 3, 4, 5, 6]));
console.log(sumFirstPart([1000, 200, 100, 433, 505, 600]));
