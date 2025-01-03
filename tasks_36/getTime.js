// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

const getTimes = (sec) => {
  let seconds = sec;

  const secondsInDay = 60 * 60 * 24;
  const secondsInHour = 60 * 60;

  const result = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  };

  result.d = Math.trunc(seconds / secondsInDay);
  seconds = seconds - result.d * secondsInDay;
  result.h = Math.trunc(seconds / secondsInHour);
  seconds = seconds - result.h * secondsInHour;
  result.m = Math.trunc(seconds / 60);
  result.s = seconds - result.m * 60;

  return result;
};

console.log(getTimes(1076399));
