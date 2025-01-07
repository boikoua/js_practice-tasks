// Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.

const getLettersObject = (text) => {
  const result = {};

  const arr = text.split(' ');

  arr.forEach((word) => {
    const firstLetter = word[0].toLowerCase();

    if (result.hasOwnProperty(firstLetter)) {
      result[firstLetter].push(word);
    } else {
      result[firstLetter] = [];
      result[firstLetter].push(word);
    }
  });

  return result;
};

console.log(
  getLettersObject('Hello how are you my bro I fell very good have a good car')
);
console.log(
  getLettersObject('the city Kharkov is a very big city Lilia Boiko')
);
