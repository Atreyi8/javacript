//
//Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin()
//which should return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1).
//To implement SpecialStack, you should only use standard Stack data structure and no other data structure like arrays, list, .. etc.

let stack = [];
let minimumElement = -100;

const minElement = () => {
  if (stack.length === 0) {
    return -1;
  }
  return minimumElement;
};

const push = (ele) => {
  if (stack.length === 0) {
    stack.push(ele);
  } else {
    if (ele >= minimumElement) {
      stack.push(ele);
    } else if (ele < minimumElement) {
      stack.push(2 * ele - minimumElement);
      minimumElement = ele;
    }
  }
};

const pop = () => {
  if (stack.length === 0) {
    return -1;
  } else {
    if (stack.top() >= minimumElement) {
      stack.pop();
    } else if (stack.top() < minimumElement) {
      minimumElement = 2 * minimumElement - stack.top();
      stack.pop();
    }
  }
};

const top = () => {
  if (stack.length === 0) {
    return -1;
  } else if (stack[stack.length] < minimumElement) {
    return minimumElement;
  } else if (stack[stack.length] >= minimumElement) {
    return stack[stack.length - 1];
  }
};

[5, 7, 3, 2, 1];
