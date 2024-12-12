// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

function penultimateCharacter(str) {
  if (str.length > 1) {
    return str[str.length - 2];
  } else {
    return str;
  }
}

console.log(penultimateCharacter('hello'));
console.log(penultimateCharacter('g'));
