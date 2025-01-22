//Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
// Input: arr[]   = {2, 0, 2}
// Output: 2
// Structure is like below
// | |
// |_|
// We can trap 2 units of water in the middle gap.

// Input: arr[]   = {3, 0, 0, 2, 0, 4}
// Output: 10
// Structure is like below
//      |
// |    |
// |  | |
// |__|_|
// We can trap "3*2 units" of water between 3 an 2,
// "1 unit" on top of bar 2 and "3 units" between 2
// and 4.  See below diagram also.

const maxHeightToLeft = (arr) => {
  let temp = [];
  let max = arr[0];
  arr.forEach((ele) => {
    if (max < ele) {
      max = ele;
    }
    temp.push(max);
  });
  return temp;
};

const maxHeightToRight = (arr) => {
  console.log("arr", arr);
  let temp = [];
  let max = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
    }
    temp.push(max);
  }
  return temp;
};

const rainwaterTrappingProblem = (buildingArray) => {
  let maxToLeft = maxHeightToLeft(buildingArray);
  let maxToRight = maxHeightToRight(buildingArray);
  console.log(maxToLeft, maxToRight);
  let sum = 0;
  for (let i = 0; i < buildingArray.length; i++) {
    console.log(maxToLeft[i], maxToRight[i], buildingArray[i]);
    let waterTrapped = Math.min(maxToLeft[i], maxToRight[i]) - buildingArray[i];
    sum = sum + waterTrapped;
  }
  return sum;
};

console.log(rainwaterTrappingProblem([3, 0, 0, 2, 0, 4]));
