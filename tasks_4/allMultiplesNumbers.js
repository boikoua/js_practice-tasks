const allMultiplesNumbers = (start, finish, number) => {
  for (let i = start; i <= finish; i++) {
    if (!(i % number)) {
      console.log(i);
    }
  }
};

// Выведите в консоль все четные числа из промежутка от 1 до 100.

allMultiplesNumbers(1, 100, 2);

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

allMultiplesNumbers(1, 100, 3);
