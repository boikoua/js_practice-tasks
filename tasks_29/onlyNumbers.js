// Дана строка. Проверьте, что эта строка состоит только из цифр.

function onlyNumbers(str) {
  return Array.from(str).every((item) => {
    if (typeof +item === 'number' && !isNaN(+item)) {
      return true;
    }
  });
}

console.log(onlyNumbers('1223322342'));
console.log(onlyNumbers('1223322342hello'));
console.log(onlyNumbers('777'));
