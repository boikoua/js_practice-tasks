// Дан массив с числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

const includedNumber = (arr, num) => {
  return arr.every((item) => String(item).includes(num));
};

console.log(includedNumber([3, 23, 43, 37], 3));
console.log(includedNumber([50, 22, 41, 87], 3));
