1;
let input = [3, 4, 5];

let gurvaljinP = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i];
  return sum;
};

let result = gurvaljinP(input);
console.log(result);
2;
let input = 5;

let kubP = (a) => {
  let arr = [];
  let sum1;
  let sum2;
  sum1 = a * a * a;
  sum2 = a * a * 6;
  arr.push(sum1, sum2);
  return arr;
};
let result = kubP(input);
console.log(result);
3;
let input = [6, 4];

let tegshOntsogt = (a) => {
  let arr = [];
  let sum1 = 1;
  let sum2 = 0;
  for (let i = 0; i < a.length; i++) {
    sum1 = sum1 * a[i];
    sum2 = sum2 + a[i] + a[i];
  }
  arr.push(sum1, sum2);
  return arr;
};
let result = tegshOntsogt(input);
console.log(result);
4;
let input = 1;
function funC(x) {
  let y;
  y = 3 * x - 5;
  return y;
}

let result = funC(input);
console.log(result);
5;
let input = -2;
function funC(x) {
  let y;
  y = 4 * x ** 2 - 3 * x + 5;
  return y;
}

let result = funC(input);
console.log(result);

6;
let input = 506;
let lastOron = (a) => {
  let sum;
  sum = 476 % 10;
  return sum;
};
let result = lastOron(input);
console.log(result);

7;
let input = 453;
let lastOron = (a) => {
  let div;
  let div2;
  let div3;
  let div4;
  div = a % 100;
  div2 = div % 10;
  div3 = div - div2;
  div4 = div3 / 10;
  return div4;
};
let result = lastOron(input);
console.log(result);
8.
