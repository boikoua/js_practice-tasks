const allNumbers = (a, b) => {
  const res = [];

  let num1 = String(a);
  let num2 = String(b);

  for (const n of num2) {
    if (num1.includes(n)) {
      res.push(+n);
    }
  }

  return Array.from(new Set(res));
};

console.log(allNumbers(17154, 1657784));
console.log(allNumbers(1994, 2024));
