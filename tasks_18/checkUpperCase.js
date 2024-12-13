// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const checkUpperCase = (str) => {
  let result = 0;

  str.split('').forEach((item) => {
    const condition = item === item.toUpperCase();

    if (condition) {
      result += 1;
    }
  });

  return result <= 2 ? true : false;
};

console.log(checkUpperCase('HeLooo'));
console.log(checkUpperCase('HeLoOO'));
