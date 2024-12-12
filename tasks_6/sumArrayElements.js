// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

const sumArrayElements = (arr, max, min = 0) => {
  const result = arr.reduce((acc, item) => {
    if (item > min && item < max) {
      return acc + item;
    }

    return acc;
  }, 0);

  return result;
};

console.log(sumArrayElements([1, 2, 10, 100, -6, 5], 10));
