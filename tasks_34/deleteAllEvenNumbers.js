function deleteAllEvenNumbers(num) {
  return +Array.from(String(num))
    .filter((item) => item % 2 !== 0)
    .join('');
}

console.log(deleteAllEvenNumbers(1000));
console.log(deleteAllEvenNumbers(555));
console.log(deleteAllEvenNumbers(4567));
