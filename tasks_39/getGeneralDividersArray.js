// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.

function getGeneralDividersArray(arr) {
  const result = [1];

  const array = [...arr].sort((a, b) => a - b);

  for (let i = 2; i <= array[0]; i++) {
    const temp = array.every((item) => item % i === 0);

    if (temp) {
      result.push(i);
    }
  }

  return result;
}

console.log(getGeneralDividersArray([10, 20, 30, 15]));
console.log(getGeneralDividersArray([11, 9, 6, 5]));
console.log(getGeneralDividersArray([20, 16, 24, 28, 44]));
