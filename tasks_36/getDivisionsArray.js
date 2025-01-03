// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

function divisionsArray(n) {
  const result = [1];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  return result;
}

const getDivisionsArray = (arr) => {
  return arr.map((num) => {
    return divisionsArray(num);
  });
};

console.log(getDivisionsArray([10, 5, 4, 15, 22]));
console.log(getDivisionsArray([78, 1, 2, 100, 220]));
