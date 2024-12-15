// Дан массив с числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

function includesNumber(arr, num) {
  return arr.some((item) => String(item).includes(String(num)));
}

console.log(includesNumber([100, 45, 36, 78, 90, 83], 3));
console.log(includesNumber([100, 45, 36, 78, 90, 83], 5));
console.log(includesNumber([100, 45, 36, 78, 90, 83], 2));
