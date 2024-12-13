// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

const objectToArrays = (obj) => {
  const arrKeys = Object.keys(obj);
  const arrValues = Object.values(obj);

  console.log(`{
    keys: ${arrKeys},
    values: ${arrValues}
  }`);
};

objectToArrays({
  name: 'Dima',
  age: 29,
  city: 'Kharkov',
});
