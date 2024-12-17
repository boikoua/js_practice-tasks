// Сделайте функцию, которая вернет текущий день недели словом.

function dayName() {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const currentDay = new Date().getDay();

  return days[currentDay];
}

console.log(dayName());
