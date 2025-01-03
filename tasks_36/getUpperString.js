// Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

const getUpperString = (str) => {
  let result = '';
  const words = str.split(' ');

  for (const word of words) {
    result += word[0].toUpperCase();
  }

  return result;
};

console.log(getUpperString('hello world how are you my friend'));
console.log(getUpperString('private butter can make'));
