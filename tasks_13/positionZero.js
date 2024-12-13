// Дана некоторая строка. Найдите позицию третьего нуля в строке.

function positionZero(str, count = 1) {
  let zeroCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      zeroCount++;

      if (zeroCount === count) {
        return i;
      }
    }
  }

  return -1;
}

console.log(positionZero('h0e0l0l0oo', 3)); // 5
console.log(positionZero('hell0oo', 3));
