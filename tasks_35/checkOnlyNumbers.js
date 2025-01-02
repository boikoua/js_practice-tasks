// Дана переменная со строкой. Проверьте, что эта строка представляет собой число, то есть состоит только из цифр.

const checkOnlyNumbers = (value) => {
  return isNaN(Number(value))
    ? "No, the value isn't number"
    : 'Yes, the value is number';
};

console.log(checkOnlyNumbers('dima'));
console.log(checkOnlyNumbers('777d'));
console.log(checkOnlyNumbers('777'));
