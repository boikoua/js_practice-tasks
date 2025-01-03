// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

function randomNum(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomString = (num) => {
  let result = '';

  const allLatinLetters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < num; i++) {
    const index = randomNum(0, allLatinLetters.length - 1);

    result += allLatinLetters[index];
  }

  return result;
};

console.log(getRandomString(5));
console.log(getRandomString(10));
