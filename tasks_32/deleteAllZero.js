// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

const deleteAllZero = (num) => {
  return +Array.from(String(num))
    .filter((item) => item !== '0')
    .join('');
};

console.log(deleteAllZero(2024));
console.log(deleteAllZero(2004));
console.log(deleteAllZero(1023098400));
