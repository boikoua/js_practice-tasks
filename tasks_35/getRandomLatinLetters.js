// Сделайте функцию, которая заполнит массив случайными латинскими буквами.

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomLatinLetters = (length = 10) => {
  const letters = [
    ...[...Array(26)].map((_, i) => String.fromCharCode(97 + i)),
    ...[...Array(26)].map((_, i) => String.fromCharCode(65 + i)),
  ];

  const res = [];

  for (let i = 0; i < length; i++) {
    const index = getRandomNum(0, letters.length - 1);
    res.push(letters[index]);
  }

  return res;
};

console.log(getRandomLatinLetters());
console.log(getRandomLatinLetters(5));
console.log(getRandomLatinLetters(3));
console.log(getRandomLatinLetters(13));
