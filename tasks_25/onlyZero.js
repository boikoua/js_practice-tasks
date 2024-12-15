// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

function onlyZero(arr) {
  return arr.filter((item) => String(item).includes('0'));
}

console.log(onlyZero([100, 10, 11, 15, 20, 16]));
