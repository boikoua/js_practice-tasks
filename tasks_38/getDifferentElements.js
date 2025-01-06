// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

const getDifferentElements = (arr) => {
  let actualElement = '';

  return () => {
    if (arr.length === 1) return arr[0];

    let newElement;

    do {
      const index = Math.floor(Math.random() * arr.length);
      newElement = arr[index];
    } while (newElement === actualElement);

    lastElement = newElement;
    return newElement;
  };
};

const func1 = getDifferentElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(func1());
