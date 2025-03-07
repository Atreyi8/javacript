// Suppose you have a sorted array of infinite numbers, how would you search an element in the array?

// Since array is sorted, the first thing clicks into mind is binary search,
//but the problem here is that we don’t know size of array.
// If the array is infinite, that means we don’t have proper bounds to apply binary search.
//So in order to find position of key, first we find bounds and then apply binary search algorithm.

// Let low be pointing to 1st element and high pointing to 2nd element of array, Now compare key with high index element,
// -if it is greater than high index element then copy high index in low index and double the high index.
// -if it is smaller, then apply binary search on high and low indices found.

const binarySearch = (arr, target, low, high) => {
  console.log(low, high);
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    console.log(mid);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
const findEleInfiniteSortedArray = (arr, target) => {
  let low = 0;
  let high = 1;
  while (target > arr[high]) {
    low = high;
    high = high * 2;
  }
  console.log(low, high);
  return binarySearch(arr, target, low, high);
};

console.log(
  findEleInfiniteSortedArray(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 19, 20, 22, 23, 24],
    18
  )
); // 6
