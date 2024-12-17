// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.

function deleteTheSameAnyCount(arr, maxCount) {
  const temp = {};
  const overNum = [];

  for (const el of arr) {
    if (temp[el]) {
      temp[el] += 1;
    } else {
      temp[el] = 1;
    }
  }

  for (const key in temp) {
    if (temp[key] > maxCount) {
      overNum.push(+key);
    }
  }

  return arr.filter((item) => {
    if (!overNum.includes(item)) {
      return item;
    }
  });
}

console.log(
  deleteTheSameAnyCount(
    [1, 2, 3, 4, 5, 1, 2, 3, 7, 8, 9, 9, 2, 3, 1, 1, 3, 8, 4, 3, 2, 1, 2],
    3
  )
);
