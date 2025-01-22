const insertLast = (list, temp) => {
  if (list.length === 0 || list[list.length - 1] <= temp) {
    list.push(temp);
    return list;
  }

  let otherTemp = list[list.length - 1];
  list.pop();
  insertLast(list, temp);
  list.push(otherTemp);
};

const sortStack = (stack1) => {
  if (stack1.length === 1) {
    return;
  }

  let lastElement = stack1[stack1.length - 1];
  stack1.pop();
  sortStack(stack1);
  insertLast(stack1, lastElement);

  return stack1;
};

console.log(sortStack([2, 3, 7, 6, 4, 5, 9]));
