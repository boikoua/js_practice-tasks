// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.

const checkGreatYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
};

console.log(checkGreatYear(2024));
console.log(checkGreatYear(2022));
console.log(checkGreatYear(2000));
console.log(checkGreatYear(1994));
console.log(checkGreatYear(1990));
