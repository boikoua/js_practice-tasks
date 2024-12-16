// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

function deleteNumbersWithZero(arr) {
  return arr.filter((item) => {
    let count = 0;

    for (const num of String(item)) {
      if (num === '0') {
        count++;
      }
    }

    if (count < 2) {
      return item;
    }
  });
}

console.log(deleteNumbersWithZero(['100', '10', '20', '300', '2024', '3000']));
