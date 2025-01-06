// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

const getSimpleNumbers = (start, finish) => {
  const result = [];
  let count = 1;

  for (let i = start; i <= finish; i++) {
    for (let k = 2; k <= i; k++) {
      if (i % k === 0) {
        count++;
      }
    }

    if (count <= 2) {
      result.push(i);
    }

    count = 1;
  }

  return result;
};

console.log(getSimpleNumbers(5, 10));
console.log(getSimpleNumbers(10, 25));
