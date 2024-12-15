// Через запятую написаны числа. Получите максимальное из этих чисел.

function maxNumber(str) {
  const prepareArr = str.split(',').map((item) => +item);

  return Math.max(...prepareArr);
}

console.log(maxNumber('100, 10, 24, 199, 201'));
console.log(maxNumber('100, 10, 404, 199, 201'));
