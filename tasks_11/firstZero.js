// Дана некоторая строка. Найдите позицию первого нуля в строке.

function firstZero(str) {
  return str.indexOf('0');
}

console.log(firstZero('hello'));
console.log(firstZero('hell0'));
console.log(firstZero('h0ll0'));
