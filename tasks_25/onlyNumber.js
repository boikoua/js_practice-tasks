// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

function onlyNumber(arr, number) {
  return arr.filter((num) => num % number === 0);
}

console.log(onlyNumber([10, 5, 14, 20, 1, 100, 44], 5));
