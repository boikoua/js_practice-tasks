// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const findAllLetters = (str, count) => {
  let res = 0;

  for (let el of str) {
    if (isNaN(+el)) {
      res++;
    }
  }

  return res <= count ? true : false;
};

console.log(findAllLetters('ad336d', 3));
console.log(findAllLetters('ad336ddd', 3));
