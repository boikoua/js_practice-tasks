// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

function allNumbers(start, finish, condition) {
  for (let i = start; i <= finish; i++) {
    const numStr = String(i);
    if (numStr.length > 1) {
      const sum = Number(numStr[0]) + Number(numStr[1]);
      if (sum === condition) {
        console.log(i);
      }
    }
  }
}

allNumbers(1, 1000, 5);
