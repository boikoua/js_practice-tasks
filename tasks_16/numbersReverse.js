// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]

const numbersReverse = (arr) => {
  return arr.map((item) => Number(String(item).split('').reverse().join('')));
};

console.log(numbersReverse([123, 456, 789]));
