var isPalindrome = function (x) {
  let xCopy = x;
  if (x < 0) return false;
  let reversed = 0;
  while (x > 0) {
    let remainder = x % 10; // take the last digit
    reversed = 10 * reversed + remainder;
    x = Math.floor(x / 10); // remove the last digit
  }
  return reversed === xCopy;
};

console.log(isPalindrome(1110111));
