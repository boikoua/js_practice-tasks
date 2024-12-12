// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

function findFormat(arr) {
  return arr.filter((item) => item.slice(-5) === '.html');
}

console.log(findFormat(['index.html', 'main.js', 'style.css', 'about.html']));
