// Заполните массив четными числами из промежутка от 1 до 100.

const fillArrayEven = (start, finish) => {
  const result = [];

  for (let i = start; i <= finish; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
};

console.log(fillArrayEven(1, 100));
