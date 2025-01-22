//Given a binary matrix, find the maximum size rectangle binary-sub-matrix with all 1’s.
//Example:

// Input :   0 1 1 0
//           1 1 1 1
//           1 1 1 1
//           1 1 0 0

// Output :  1 1 1 1
//           1 1 1 1 .
// h*w = 2*4 = 8

// so we dont know to solve 2d max area - but we know 1d max area of histogram
// so we can break problem into 4 1d area , calc histogram of them each, and return max
// 1 1d array -  0 1 1 0
// 2 1d array =  1 1 1 1 + 0 1 1 0 = 1 2 2 1
// 3 1d array =  1 1 1 1 +  1 2 2 1 = 2 3 3 1
// 4 1d array 1 1 0 0(height 0 - building ka base hi nhi h toh 0 , hawa mai building, check jaha se add kr rhe , wohi base h , upar wala zero ho sakta) 0 (height 0 - building ka base hi nhi h toh 0 , hawa mai building)
//  1 1 0 0 + 2 3 3 1 = 3 4 0 0

const NSL = (inputArray) => {
  let pseudoElement = -1;
  let stack = [];
  let vectorArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (stack.length === 0) {
      vectorArray.push(pseudoElement);
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].ele < inputArray[i]
    ) {
      vectorArray.push(stack[stack.length - 1].index);
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].ele >= inputArray[i]
    ) {
      while (stack.length > 0 && stack[stack.length - 1].ele >= inputArray[i]) {
        stack.pop();
        if (stack.length === 0) {
          vectorArray.push(pseudoElement);
        } else if (
          stack.length > 0 &&
          stack[stack.length - 1].ele < inputArray[i]
        ) {
          vectorArray.push(stack[stack.length - 1].index);
        }
      }
    }
    stack.push({ ele: inputArray[i], index: i });
  }
  return vectorArray;
};

const NSR = (heightArr) => {
  let pseudoElement = heightArr.length;
  let stack = [];
  let vectorArray = [];
  for (let i = heightArr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      vectorArray.push(pseudoElement);
    } else if (stack.length > 0 && stack[stack.length - 1].ele < heightArr[i]) {
      vectorArray.push(stack[stack.length - 1].index);
    } else if (
      stack.length > 0 &&
      stack[stack.length - 1].ele >= heightArr[i]
    ) {
      while (stack.length > 0 && stack[stack.length - 1].ele >= heightArr[i]) {
        stack.pop();
        if (stack.length === 0) {
          vectorArray.push(pseudoElement);
        } else if (
          stack.length > 0 &&
          stack[stack.length - 1].ele < heightArr[i]
        ) {
          vectorArray.push(stack[stack.length - 1].index);
        }
      }
    }
    stack.push({ ele: heightArr[i], index: i });
  }

  return vectorArray.reverse();
};
const MAH = (heightArray) => {
  console.log("here", heightArray);
  const nsl = NSL(heightArray);
  const nsr = NSR(heightArray);
  let area = [];
  let max = -1;
  for (let i = 0; i < heightArray.length; i++) {
    let widthAtindex = nsr[i] - nsl[i] - 1;
    let areaAtIndex = heightArray[i] * widthAtindex;
    max = Math.max(max, areaAtIndex);
    area.push(areaAtIndex);
  }
  console.log(area, max);
  return max;
};

const maxAreaOfBinaryMatrix = (arr2d, row, column) => {
  let vector = [];
  let max = -1;
  for (let j = 0; j < column; j++) {
    vector.push(arr2d[0][j]);
  }
  max = MAH(vector);
  for (i = 1; i < row; i++) {
    for (j = 0; j < column; j++) {
      if (arr2d[i][j] === 0) {
        vector[j] = 0;
      } else {
        vector[j] = vector[j] + arr2d[i][j];
      }
    }
    max = Math.max(max, MAH(vector));
  }
  console.log(max);
  return max;
};

maxAreaOfBinaryMatrix(
  [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
  ],
  4,
  4
);
