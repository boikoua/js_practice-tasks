// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

const allNumbersEven = (start, finish) => {
  for (let i = start; i <= finish; i++) {
    const elem = Number(String(i)[String(i).length - 2]);

    if (elem % 2 === 0) {
      console.log(i);
    }
  }
};

allNumbersEven(10, 1000);
