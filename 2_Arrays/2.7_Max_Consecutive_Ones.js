let findMaxConsecutiveOnes = function (nums) {
    let currCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++
        } else {
            maxCount = Math.max(currCount, maxCount)
            currCount = 0
        }
    }
    return Math.max(currCount, maxCount)
};


let arr = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(arr))



// Given a binary array nums, return the maximum number of consecutive 1's in the array.


//* Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

//* Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2