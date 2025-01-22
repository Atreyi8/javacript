//Find the largest rectangular area possible in a given histogram where the largest rectangle can be made of a number of contiguous bars.
// For simplicity, assume that all bars have same width and the width is 1 unit.
//https://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-using-stack/
//I/p -{6, 2, 5, 4, 5, 1, 6}
//o/p - 12
// area - [6*1,2*5,5*1,4*3,5*1,1*7,6*1]
//max - 3*4 = 12

//#################### Stack Solution ########################

const NSL = (heightArr) => {
  let pseudoElement = -1;
  let stack = [];
  let vectorArray = [];
  for (let i = 0; i < heightArr.length; i++) {
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

const maxAreaofhistogram = (heightArr) => {
  let nsl = NSL(heightArr);
  let nsr = NSR(heightArr);
  console.log(nsl, nsr);
  console.log(nsl, nsr);
  let area = [];
  let max = -1;
  for (let i = 0; i < heightArr.length; i++) {
    let widthAtindex = nsr[i] - nsl[i] - 1;
    let areaAtIndex = heightArr[i] * widthAtindex;
    max = Math.max(max, areaAtIndex);
    area.push(areaAtIndex);
  }
  console.log(area, max);
  return max;
};

console.log(maxAreaofhistogram([6, 2, 5, 4, 5, 1, 6]));
