// Заполните массив случайными числами из промежутка от 1 до 100.

const arrayFromRandomNumbers = (finish) => {
  const result = [];
  let flag = 0;

  while (flag < finish) {
    const randomNumber = Math.ceil(Math.random() * finish);
    result.push(randomNumber);
    flag += randomNumber;
  }

  return result;
};

console.log(arrayFromRandomNumbers(100));
