// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

function findHttp(arr) {
  return arr.filter((item) => item.slice(0, 7) === 'http://');
}

console.log(
  findHttp([
    'http://google.com',
    'http://urk.ua',
    'i.com',
    'http://football.ua',
  ])
);
