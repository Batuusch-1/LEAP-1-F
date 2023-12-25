const array = [1, 2, 3, 4, 5, 6];
const secondArray = [];
let multify;
let divider;
let diviDed = [];
function multiArray() {
  for (let i = 0; i <= array.length - 1; i++) {
    multily = array[i] * 2;
    secondArray.push(multily);
  }
  return secondArray;
}
const result = multiArray();
console.log(result);

function diviDe() {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 == 0) {
      diviDed.push(array[i]);
    }
  }
  return diviDed;
}
const result1 = diviDe();
console.log(result1);
