// Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'

function createString(num) {
  let res = '';

  for (let i = 1; i <= num; i++) {
    if (!res.length) {
      res += '-';
    }

    res += `${i}-`;
  }

  return res;
}

console.log(createString(5));
console.log(createString(10));
