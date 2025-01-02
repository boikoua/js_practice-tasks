// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

const getFillArray = (min = 0, max = 10) => {
  const res = [];

  let start = Math.min(min, max);
  let end = Math.max(min, max);

  for (let i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
};

console.log(getFillArray());
console.log(getFillArray(100, 150));
console.log(getFillArray(150, 100));
