const insertLast = (list, ele) => {
  console.log("2---", list, ele);
  if (list.length === 0) {
    list.push(ele);
    return;
  }

  let anotherElement = list[list.length - 1];
  list.pop();
  insertLast(list, ele);
  list.push(anotherElement);
};

const reverseStack = (stack1) => {
  console.log("1---", stack1);
  if (stack1.length === 0 || stack1.length === 1) {
    return;
  }

  let element = stack1[stack1.length - 1];
  stack1.pop();
  reverseStack(stack1);
  console.log("3---", stack1);
  insertLast(stack1, element);
  return stack1;
};

console.log(reverseStack([1, 2, 3, 4, 5]));
