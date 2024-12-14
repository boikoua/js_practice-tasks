// Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

function deleteElements(arr1, arr2) {
  const littleArrLength = arr1.length > arr2.length ? arr2.length : arr1.length;

  arr2.length = littleArrLength;

  console.log(`{
    arr1 = ${arr1}, 
    arr2 = ${arr2}
  }`);
}

deleteElements(arr1, arr2);
