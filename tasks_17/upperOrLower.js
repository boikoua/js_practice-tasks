// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

function upperOrLower(symbol) {
  return symbol === symbol.toUpperCase() ? 'upper case' : 'lower case';
}

console.log(upperOrLower('d'));
console.log(upperOrLower('D'));
