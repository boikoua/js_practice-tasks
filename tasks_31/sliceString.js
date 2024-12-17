// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

function sliceString(num, str) {
  return str.slice(0, num);
}

console.log(sliceString(5, 'welcome'));
console.log(sliceString(3, 'hello'));
console.log(sliceString(10, 'world'));
