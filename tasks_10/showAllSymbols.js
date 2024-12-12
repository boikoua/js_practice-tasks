// Дано некоторое число: 12345
// Выведите в консоль все его символы с конца.

const showAllSymbols = (num) => {
  const stringFromNum = String(num);

  for (const n of stringFromNum) {
    console.log(+n);
  }
};

showAllSymbols(12345);
