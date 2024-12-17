function returnDay(dateInput) {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const date = new Date(dateInput);

  const dayIndex = date.getDay();

  return days[dayIndex];
}

console.log(returnDay('2024-12-17'));
console.log(returnDay(new Date()));
