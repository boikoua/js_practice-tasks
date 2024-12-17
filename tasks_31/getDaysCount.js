// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function getDaysCount(sec) {
  const secondsInOneDay = 60 * 60 * 24;
  return Math.floor(sec / secondsInOneDay);
}

console.log(getDaysCount(86400));
console.log(getDaysCount(172800));
console.log(getDaysCount(232800));
