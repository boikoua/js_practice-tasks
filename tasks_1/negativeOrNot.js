// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

function negativeOrNot(num) {
  return num < 0 ? 'negative' : 'positive';
}

console.log(negativeOrNot(-10)); // negative
console.log(negativeOrNot(10)); // positive
