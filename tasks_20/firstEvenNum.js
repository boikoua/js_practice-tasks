// Дано число. Получите первую четную цифру с конца этого числа.

const firstEvenNum = (num) => {
  let str = String(num);

  for (let i = str.length - 1; i >= 0; i--) {
    if (+str[i] % 2 === 0) return +str[i];
  }

  return null;
};

console.log(firstEvenNum(1237974389));
console.log(firstEvenNum(1237639));
