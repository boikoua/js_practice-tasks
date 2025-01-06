// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

const getTotalUnique = (min, max, n) => {
  if (n > max - min) {
    throw new Error('n should be less or equal to max - min');
  }

  if (max < min) {
    throw new Error('max should be more than or equal to min');
  }

  const result = [];

  while (result.length < n) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    const condition = result.includes(num);

    if (!condition) result.push(num);
  }

  return result;
};

console.log(1000, 900, 10);
console.log(10, 20, 20);
console.log(getTotalUnique(10, 15, 5));
console.log(getTotalUnique(0, 15, 8));
console.log(getTotalUnique(1000, 1500, 10));
