// Даны числа, разделенные запятыми: '12,34,56'
// Найдите сумму этих чисел.

function sumNumbers(str) {
  return str.split(',').reduce((acc, item) => acc + +item, 0);
}

console.log(sumNumbers('12,34,56'));
