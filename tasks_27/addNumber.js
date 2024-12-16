// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

function addNumber(arr) {
  const res = [];

  for (const el of arr) {
    if (String(el).length === 1) {
      res.push(el);
    }

    res.push(el);
  }

  return res;
}

console.log(addNumber([12, 15, 4, 7, 10, 31, 5]));
