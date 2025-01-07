// Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.

const mixElements = (arr) => {
  const temp = [...arr];
  const result = [];

  while (temp.length > 0) {
    const index = Math.floor(Math.random() * temp.length);
    const el = temp.splice(index, 1)[0];

    result.push(el);
  }

  return result;
};

console.log(mixElements(['hello', 'how', 'are', 'you']));
console.log(mixElements([100, 200, 300, 400, 500]));
