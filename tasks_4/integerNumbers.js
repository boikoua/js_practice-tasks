const integerNumbers = (start, finish) => {
  if (start < finish) {
    for (let i = start; i <= finish; i++) {
      console.log(i);
    }
  } else {
    for (let i = start; i >= finish; i--) {
      console.log(i);
    }
  }
};

// Выведите в консоль все целые числа от 1 до 100.
integerNumbers(1, 100);

// Выведите в консоль все целые числа от -100 до 0.
integerNumbers(-100, 0);

// Выведите в консоль все целые числа от 100 до 1.
integerNumbers(100, 1);
