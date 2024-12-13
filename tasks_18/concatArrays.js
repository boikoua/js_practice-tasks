// Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]

const concatArrays = (arr1, arr2) => {
  const lastSymbol = arr1.pop();

  return arr1.concat(arr2, lastSymbol);
};

console.log(concatArrays(arr1, arr2));
