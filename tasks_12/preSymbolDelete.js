// Дана строка. Удалите предпоследний символ из этой строки.

const preSymbolDelete = (str) => {
  const arr = str.split('');
  arr.splice(arr.length - 2, 1);
  return arr.join('');
};

console.log(preSymbolDelete('hello'));
console.log(preSymbolDelete('welcome'));
