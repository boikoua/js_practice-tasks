// Заполните массив целыми числами от 1 до 10.

const fillArray = (start, finish) => {
  const result = [];

  for (let i = start; i <= finish; i++) {
    result.push(i);
  }

  return result;
};

console.log(fillArray(1, 10));
