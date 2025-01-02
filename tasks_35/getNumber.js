// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

const getNumber = (arr) => {
  const res = arr.sort((a, b) => b - a);
  return res[1];
};

console.log(getNumber([100, 70, 50, 40, 99, 101]));
console.log(getNumber([90, 70, 50, 40, 20, 10, 91, 111]));
