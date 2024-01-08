// Double the Numbers:
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]
const array1 = [1, 2, 3, 4];
console.log(array1.map((el) => el * 2));
// Filter Even Numbers:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 3, 5]
const array2 = [1, 2, 3, 4, 5];
console.log(array2.filter((el) => el % 2 != 0));
// Square and Filter:
// Input: [1, 2, 3, 4, 5], Threshold: 10
// Output: [1, 4, 9, 16, 25]
const array3 = [1, 2, 3, 4];
console.log(array1.map((el) => el * el));
// Uppercase Strings:
// Input: ['apple', 'banana', 'cherry']
// Output: ['APPLE', 'BANANA', 'CHERRY']
const array4 = ["apple", "banana", "cherry"];
console.log(array4.map((el) => el.toLocaleUpperCase()));
// Filter by Length:
// Input: ['cat', 'dog', 'elephant', 'lion'], Min Length: 4
// Output: ['elephant', 'lion']
const array5 = ["cat", "dog", "elephant", "lion"];
const filteredLength = array5.filter((el) => el.length >= 4);
console.log(filteredLength);
// Extract Names:
// Input: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
// Output: ['Alice', 'Bob', 'Charlie']
const array6 = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(array6.map((el) => el.name));
// Filter by Type:
// Input: [1, 'apple', true, 42, 'banana'], Target Type: 'string'
// Output: ['apple', 'banana']
const array7 = [1, "apple", true, 42, "banana"];
const findsStr = array7.filter((el) => typeof el === "string");
console.log(findsStr);
// Calculate Squares:
// Input: [2, 4, 6]
// Output: [4, 16, 36]
const array8 = [2, 4, 6];
console.log(array8.map((el) => el * el));
// Filter Unique Values:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
const array9 = [1, 2, 2, 3, 4, 4, 5];

const uniqueValues = array9.filter((el, i) => array9.indexOf(el) === i);

console.log(uniqueValues);
// Combine Arrays:
// Input: ['a', 'b', 'c'], [1, 2, 3]
// Output: ['a-1', 'b-2', 'c-3']
const array10 = ["a", "b", "c"];
const array11 = [1, 2, 3];
// const addedArr = array10.map((el ,i)=> i +array11.map(el,i) )
// console.log(addedArr);
const combineArr = array10.map((el, i) => {
  return el + "-" + array11[i];
});
console.log(combineArr);
