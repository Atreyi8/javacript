//Given an array of integers, find the closest (not considering distance, but value) greater on left of every element.
//If an element has no greater on the left side, print -1 .

//I/p - [1,3,2,4]
//O/p - [-1,-1,3,-1]

const ngl = (arr) => {
  let result = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      result.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      result.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
        if (stack.length === 0) {
          result.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
          result.push(stack[stack.length - 1]);
        }
      }
    }
    stack.push(arr[i]);
  }
  return result;
};
ngl([1, 3, 2, 4]);
