//Nearest Greater to right | Next Largest Element
//Given an array, print the Next Greater Element (NGE) for every element.
//The Next greater Element for an element x is the first greater element on the right side of x in array.
// Elements for which no greater element exist, consider next greater element as -1.
//I/p - [1,3,4,2,6]
//O/p - [3,4,6,6,-1]

class Stack {
  constructor() {
    this.items = [];
  }

  // add element to the stack
  add(element) {
    return this.items.push(element);
  }

  // remove element from the stack
  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // view the last element
  top() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the stack
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    this.items = [];
  }
}

let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);

const ngr = (inputarr) => {
  let n = inputarr.length - 1;
  let resultarr = [];
  for (let i = n; i >= 0; i--) {
    if (stack.size() === 0) {
      resultarr.push(-1);
    } else if (stack.size() > 0 && stack.top() > inputarr[i]) {
      resultarr.push(stack.top());
    } else if (stack.size() > 0 && stack.top() <= inputarr[i]) {
      while (stack.size() > 0 && stack.top() <= inputarr[i]) {
        stack.pop();
        if (stack.size() === 0) {
          resultarr.push(-1);
        } else if (stack.size() > 0 && stack.top() > inputarr[i]) {
          resultarr.push(stack.top());
        }
      }
    }

    stack.add(inputarr[i]);
  }

  return resultarr.reverse();
};
console.log(ngr([1, 3, 4, 2, 1, 6]));
