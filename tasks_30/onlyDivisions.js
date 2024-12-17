// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

const onlyDivisions = (arr, num) => {
  return arr.filter((item) => num % item === 0);
};

console.log(onlyDivisions([5, 10, 4, 7, 8, 2], 20));
console.log(onlyDivisions([5, 10, 4, 7, 8, 2], 16));
