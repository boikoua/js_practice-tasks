// Сделайте функцию, которая будет возвращать случайный цвет.

function randomNumber(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

console.log(getRandomColor());
