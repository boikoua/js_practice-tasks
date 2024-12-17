// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

const getPositions = (num, find) => {
  const res = [];

  const str = String(num);

  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && +str[i] === find && i !== str.length - 1) {
      res.push(i);
    }
  }

  return res;
};

console.log(getPositions(303978483743, 3));
console.log(getPositions(343978483744, 4));
