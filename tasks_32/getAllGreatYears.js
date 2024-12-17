// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

const getAllGreatYears = (start, finish = new Date().getFullYear()) => {
  const res = [];

  for (let i = start; i <= finish; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      res.push(i);
    }
  }

  return res;
};

console.log(getAllGreatYears(1900, 2000));
console.log(getAllGreatYears(1900));
