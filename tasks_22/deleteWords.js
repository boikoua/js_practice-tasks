// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'

const deleteWords = (str) => {
  const res = str
    .split(' ')
    .map((item, index) => {
      if (index % 2 === 0) {
        return item;
      }
    })
    .join(' ');

  return res;
};

console.log(deleteWords('aaa bbb ccc eee fff'));
