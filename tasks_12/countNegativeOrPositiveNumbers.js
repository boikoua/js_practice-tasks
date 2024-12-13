// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

const countNegativeOrPositiveNumbers = (arr, direction = 'positive') => {
  switch (direction) {
    case 'negative':
      return arr.filter((item) => item < 0).length;
    default:
      return arr.filter((item) => item >= 0).length;
  }
};

console.log(sumNegativeOrPositiveNumbers([1, 10, -100, -50, 200]));
console.log(sumNegativeOrPositiveNumbers([1, 10, -100, -50, 200], 'negative'));
