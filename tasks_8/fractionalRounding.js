// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

const fractionalRounding = (arr) => {
  return arr.map((item) => +item.toFixed(1));
};

console.log(fractionalRounding([1.456, 2.125, 3.32, 4.1, 5.34]));
