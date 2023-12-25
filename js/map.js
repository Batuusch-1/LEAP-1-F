const array = [1, 2, 3, 4, 5, 6];

// const multifiedArray = array.map((el , i)=>{
//     console.log(el ,i);
// })
const multifiedArray = array.map((el) => el * 2);
console.log(multifiedArray);
const aa = ["baatar", "dulmaa", "tsetsgee"];
console.log(aa.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1)));

const divider = array.map((a) => {
  if (a % 2 === 0) {
   return a;
  }
  
});
console.log(divider);
const filteredArray = array.filter((el) => el % 2 ===0);
console.log(filteredArray);
