// Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

function allZeroPosition(str) {
  const positions = [];

  str.split('').forEach((item, index) => {
    if (item === '0') {
      positions.push(index);
    }
  });

  return positions;
}

console.log(allZeroPosition('023m0df0dfg0'));
