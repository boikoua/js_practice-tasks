// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

function allSymbolsReverse(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

allSymbolsReverse('hello');
