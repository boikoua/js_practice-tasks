// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const allNumbersPosition = (str) => {
  const position = [];

  for (let i = 0; i < str.length; i++) {
    if (typeof +str[i] === 'number' && !isNaN(+str[i])) {
      position.push(i);
    }
  }

  return position;
};

console.log(allNumbersPosition('1sfd2sldkf1kk2'));
console.log(allNumbersPosition('122sfd2sldkf1kk2'));
