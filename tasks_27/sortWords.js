// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

const sortWords = (str) => {
  return str
    .split(' ')
    .sort((a, b) => a.localeCompare(b))
    .join(' ');
};

console.log(sortWords('hello apply bind call google'));
