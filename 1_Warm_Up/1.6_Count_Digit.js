// function countDigit(n){
//     let count = 0;
//     while(n>0){
//         n = Math.floor(n/10);
//         count++;
//     }
//     return count;
// }

// let num = 1234567890;

// let result = countDigit(num);
// console.log(result);

//* New Improved Code

function countDigit(n) {
  if (n === 0) return 1; // Handle the case when n is 0

  n = Math.abs(n); // Convert n to its absolute value to handle negative numbers

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let num = 12345678;
let result = countDigit(num);
console.log(result);
