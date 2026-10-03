//^ Using Hash Map,
// but here space complexity is O(n), time complexity is ok that is O(n)

// let singleNumber = function (nums) {
//     let hash = {}

//     for (let i = 0; i < nums.length; i++) {
//         if (!hash[nums[i]]) {
//             hash[nums[i]] = 1
//         } else {
//             hash[nums[i]]++
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]] === 1) { return nums[i] }
//     }
// };

// let nums = [2,2,1,1,3]

// console.log(singleNumber(nums))


//^ Using XOR ^ (best approach)
// here the space complexity will be O(1) bcz no extra space taken and space complexity is O(n) same.

// Xor works - a ^ 0 = a || a ^ a = 0 || 0 ^ a = a || 0 ^ 0 = 0

let singleNumber = function (nums) {
  let XOR = 0;

  for (let i = 0; i < nums.length; i++) {
    XOR = XOR ^ nums[i];
  }
  return XOR;
};

let nums = [2, 2, 1, 1, 3];

console.log(singleNumber(nums));



// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


//* Example 1:

// Input: nums = [2,2,1]

// Output: 1

//* Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

//* Example 3:

// Input: nums = [1]

// Output: 1
