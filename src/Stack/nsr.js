//Given an array of integers, find the closest (not considering distance, but value) smaller on rightof every element.
//If an element has no smaller on the right side, print -1.
// I/p - [4,5,2,10,8]
//o/p - [2,2,-1,8,-1]

const nsr = (arr) => {
  let result = [];
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      result.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      result.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
        if (stack.length === 0) {
          result.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
          result.push(stack[stack.length - 1]);
        }
      }
    }
    stack.push(arr[i]);
  }

  return result.reverse();
};
console.log(nsr([4, 5, 2, 10, 8]));
