// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

const doubleEveryElem = (arr) => {
  const res = [];

  for (const el of arr) {
    res.push(el, el);
  }

  return res;
};

console.log(doubleEveryElem(['g', '5', 'hello', '10', 777]));
console.log(doubleEveryElem([505, '404', 'world', '100', 7077]));
