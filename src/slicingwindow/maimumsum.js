// Maximum sum of subarray of size k

const findMaxSumofSubarray = (arr, k) => {
  let i = 0;
  let j = 0;
  let sum = 0;
  let maxSum = 0;

  while (j < arr.length) {
    sum = sum + arr[j];
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      maxSum = Math.max(sum, maxSum);

      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return maxSum;
};

let arr1 = [2, 3, 4, 15, 1, 2, 4, 7];
console.log(findMaxSumofSubarray(arr1, 3));
