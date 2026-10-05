let bubbleSort = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return nums;
};

let nums = [5, 2, 3, 1];

console.log(bubbleSort(nums));
