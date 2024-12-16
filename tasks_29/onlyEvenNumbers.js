// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

function onlyEvenNumbers(str) {
  return Array.from(str).every((item) => {
    if (+item % 2 === 0) {
      return true;
    }
  });
}

console.log(onlyEvenNumbers('1243214321'));
console.log(onlyEvenNumbers('02468'));
