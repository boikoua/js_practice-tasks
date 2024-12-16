// Дана строка в формате: 'camelCase'
// Преобразуйте ее в формат: 'snake_case'

const fromCamelToSnake = (str) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += '_' + str[i].toLowerCase();
    } else {
      res += str[i];
    }
  }

  return res;
};

console.log(fromCamelToSnake('camelCase'));
console.log(fromCamelToSnake('helloWorldGuys'));
