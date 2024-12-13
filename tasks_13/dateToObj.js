// Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

function dateToObj(date) {
  const arr = date.split('-');

  const res = {
    year: arr[0],
    month: arr[1],
    day: arr[2],
  };

  return res;
}

console.log(dateToObj('2025-12-31'));
