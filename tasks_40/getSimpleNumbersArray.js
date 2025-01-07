// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.

const getSimpleNumbersArray = (num) => {
  const result = [];

  for (let i = 2; i <= num; i++) {
    let count = 0;

    for (let k = 1; k <= i; k++) {
      if (i % k === 0) {
        count++;
      }
    }

    if (num % i === 0 && count === 2) {
      result.push(i);
    }
  }

  return result;
};

console.log(getSimpleNumbersArray(100));
console.log(getSimpleNumbersArray(11));
console.log(getSimpleNumbersArray(44));
