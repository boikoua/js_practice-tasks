// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

const arraysFromArray = (arr) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.length < 2) {
      res.push(arr[i]);
    } else if (res.length === 2) {
      console.log(res);

      res = [];
      res.push(arr[i]);
    }
  }

  if (res.length === 2) {
    console.log(res);
  }
};

arraysFromArray([1, 2, 3, 4, 5, 6]);
