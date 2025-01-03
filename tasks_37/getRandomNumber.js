// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

function getRandomNumber() {
  let prev = 0;

  return function func() {
    const result = Math.floor(Math.random() * 10);

    if (prev === result) {
      return func();
    }

    prev = result;

    return result;
  };
}

const randomNumber = getRandomNumber();

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
