// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

const firstNumber = (str) => {
  for (let i = 0; i < str.length; i++) {
    const prepareToNumber = +str[i];

    if (!isNaN(prepareToNumber) && typeof prepareToNumber === 'number') {
      return i;
    }
  }
};

console.log(firstNumber('dima1994boiko'));
