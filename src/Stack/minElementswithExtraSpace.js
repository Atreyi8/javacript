//Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull()
//and an additional operation getMin() which should return minimum element from the SpecialStack.
// All these operations of SpecialStack must be O(1).
//To implement SpecialStack, you should only use standard Stack data structure and no other data structure like arrays, list, .. etc.
//Consider the following SpecialStack
// 16  --> TOP
// 15
// 29
// 19
// 18

// When getMin() is called it should
// return 15, which is the minimum
// element in the current stack.

// If we do pop two times on stack,
// the stack becomes
// 29  --> TOP
// 19
// 18

// When getMin() is called, it should
// return 18 which is the minimum in
// the current stack.

//Inp -> [18,19,29,15,16]

let stack = [];
let SupportingStack = [];

const push = (ele) => {
  stack.push(ele);
  if (
    SupportingStack.length === 0 ||
    ele <= SupportingStack[SupportingStack.length - 1]
  ) {
    SupportingStack.push(ele);
  }
  return;
};

const pop = () => {
  let ans = stack[stack.length - 1];
  stack.pop();
  if (ans === SupportingStack[SupportingStack.length - 1]) {
    SupportingStack.pop();
  }
  return ans;
};

const minElement = () => {
  if (SupportingStack.length === 0) {
    return -1;
  }
  return SupportingStack[SupportingStack.length - 1];
};
console.log(minElement());
push(18);
console.log(stack, SupportingStack);
console.log(minElement());
push(19);
push(29);
console.log(minElement());
pop();
console.log(minElement());
push(15);
console.log(minElement());
