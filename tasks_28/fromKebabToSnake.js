// Дана строка в формате: 'kebab-case'
// Преобразуйте ее в формат: 'snake_case'

const fromKebabToSnake = (str) => {
  return str.split('-').join('_');
};

console.log(fromKebabToSnake('kebab-case'));
console.log(fromKebabToSnake('hello-world'));
