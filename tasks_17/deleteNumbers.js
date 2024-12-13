// Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28

function deleteNumbers(num, direction = 'positive') {
  return Number(
    String(num)
      .split('')
      .filter((item) => {
        switch (direction) {
          case 'negative':
            return +item % 2;
          default:
            return !(+item % 2);
        }
      })
      .join('')
  );
}

console.log(deleteNumbers(123789, 'negative'));
console.log(deleteNumbers(1237892));
