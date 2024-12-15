// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

const allEvenNumber = (start, finish) => {
  for (let i = start; i <= finish; i++) {
    const first = Number(String(i)[0]);

    if (!(first % 2)) {
      console.log(i);
    }
  }
};

allEvenNumber(10, 1000);
