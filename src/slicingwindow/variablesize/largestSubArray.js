// Find Largest subarray of sum k
// I/p = [4,1,1,1,2,3,5]
//o/p = [1,1,1,2].size => 4

const findLargest = (arr, k) => {
  let i = 0,
    j = 0,
    max = 0,
    sum = 0;

  while (j < arr.length) {
    sum = sum + arr[j];

    if (sum < k) {
      j++;
    } else if (sum === k) {
      max = Math.max(j - i + 1, max);
      j++;
    } else if (sum > k) {
      while (sum > k) {
        sum = sum - arr[i];
        i++;
      }
      if (sum === k) {
        max = Math.max(j - i + 1, max);
      }

      j++;
    }
  }

  return max;
};
// because of findLargest([1,2,3,7,5],12) , found out that after removing i in sum>k condition , and before doing j++ , needs to check for sum === k
console.log(findLargest([1, 2, 3, 7, 5], 12));
