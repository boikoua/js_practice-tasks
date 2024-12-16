// Дана строка в формате: 'snake_case'
// Преобразуйте ее в формат: 'camelCase'

const fromSnakeToCamel = (str) => {
  const arr = str.split('_');
  const res = arr.map((item, index) => {
    if (index >= 1) {
      item = item[0].toUpperCase() + item.slice(1);
    }

    return item;
  });

  return res.join('');
};

console.log(fromSnakeToCamel('snake_case'));
console.log(fromSnakeToCamel('hello_world'));
