//Given an array of integers, find the closest (not considering distance, but value) smaller on left of every element.
//If an element has no smaller on the left side, print -1 .
//i/p -[4,5,2,10,8]
//o/p - [-1,4,-1,2,2]

const nsl = (arr) => {
  let result = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
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
  return result;
};
console.log(nsl([4, 5, 2, 10, 8]));
