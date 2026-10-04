let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 1];

function sum(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr[n] : 0;
  return isOdd ? arr[n] + sum(n - 1) : 0 + sum(n - 1);
}

console.log(sum(arr.length - 1));
