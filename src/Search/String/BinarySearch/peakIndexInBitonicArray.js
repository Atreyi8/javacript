// An array arr is a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// You must solve it in O(log(arr.length)) time complexity.

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  if (nums)
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (mid > 0 && mid < nums.length - 1) {
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
          return mid;
        } else if (nums[mid + 1] > nums[mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else if (mid === 0) {
        if (nums.length === 1) return 0;
        let a = nums[0] > nums[1] ? 0 : 1;
        return a;
      } else {
        let a =
          nums[nums.length - 1] > nums[nums.length - 2]
            ? nums.length - 1
            : nums.length - 2;
        return a;
      }
    }
};
