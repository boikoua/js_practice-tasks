// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'

function upperCase(str, count) {
  const res = str
    .split(' ')
    .map((item) => {
      if (item.length <= count) {
        return item.toUpperCase();
      }

      return item;
    })
    .join(' ');

  return res;
}

console.log(upperCase('a bc def ghij', 3));
