const getCountDays = (dateInput) => {
  const now = new Date();
  const targetDate = new Date(dateInput);

  if (isNaN(targetDate.getTime())) {
    return 'Неверная дата';
  }

  const diffInMilliseconds = targetDate - now;

  const daysDifference = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if (daysDifference > 0) {
    return `До указанной даты осталось ${daysDifference} дней.`;
  } else if (daysDifference < 0) {
    return `С указанной даты прошло ${Math.abs(daysDifference)} дней.`;
  } else {
    return 'Указанная дата - сегодня!';
  }
};

console.log(getCountDays('2024-12-30'));
console.log(getCountDays('2023-11-28'));
console.log(getCountDays(new Date()));
