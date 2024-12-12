// Дано число. Выведите в консоль последнюю цифру этого числа.

const lastNumber = (num) => {
  const changeType = '' + num;

  return changeType[changeType.length - 1];
};

console.log(lastNumber(2025));
