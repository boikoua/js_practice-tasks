// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

const deleteAllNumbers = (arr, length) => {
  return arr.filter((item) => String(item).length <= length);
};

console.log(deleteAllNumbers([777, 1000, 2043, 2020, 665, 100, 10], 3));
