const createArray = (elements, count) => {
  const res = [];

  for (let i = 0; i < elements; i++) {
    res.push([]);

    for (let k = 1; k <= count; k++) {
      res[i].push(k);
    }
  }

  return res;
};

console.log(createArray(5, 3));
console.log(createArray(3, 10));
