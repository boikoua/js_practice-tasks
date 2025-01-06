// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.

const getSum = (...args) => {
  if (!args.length) return 0;
  return args.reduce((acc, item) => acc + item);
};

console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(getSum(1, 2));
console.log(getSum(100, 200, 300, 400, 500));
console.log(getSum());
