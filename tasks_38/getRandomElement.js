// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

const getRandomElement = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
};

console.log(getRandomElement([1, 2, 3, 4, 5]));
console.log(getRandomElement(['hello', 'get', 'friend']));
