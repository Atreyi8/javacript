//Find first occurence of a number in a sorted array

const firstOccurence = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      res = mid;
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
};
console.log(firstOccurence([1, 2, 3, 3, 3, 3, 4, 5, 6, 7], 3)); // 2

//for last
// start = mid+1;
