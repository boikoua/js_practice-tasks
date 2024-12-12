// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

function increaseEachNumber(arr, percent = 0) {
  return arr.map((item) => (item * percent) / 100 + item);
}

console.log(increaseEachNumber([100, 200, 300, 500, 50], 10));
