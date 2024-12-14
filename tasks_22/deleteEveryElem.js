// Дан массив. Удалите из него каждый пятый элемент.

const deleteEveryElem = (arr, count) => {
  const result = [...arr];

  for (let i = count - 1; i < result.length; i += count - 1) {
    result.splice(i, 1);
  }

  return result;
};

console.log(
  deleteEveryElem(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    5
  )
);
