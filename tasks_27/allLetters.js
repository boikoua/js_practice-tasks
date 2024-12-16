// Дана строка. Удалите из нее все гласные буквы.

const vowels = ['a', 'e', 'i', 'o', 'u'];

function allLetters(str) {
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    const find = vowels.includes(arr[i]);

    if (find) {
      arr.splice(i, 1);
    }
  }

  return arr.join('');
}

console.log(allLetters('hello'));
console.log(allLetters('wake up'));
