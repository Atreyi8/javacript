// In a party of N people, only one person is known to everyone. Such a person may be present at the party, if yes,
//(s)he doesn’t know anyone at the party. We can only ask questions like “does A know B? “.
//Find the stranger (celebrity) in the minimum number of questions.
// We can describe the problem input as an array of numbers/characters representing persons in the party.
//We also have a hypothetical function HaveAcquaintance(A, B) which returns true if A knows B, and false otherwise. How can we solve the problem?

// Input:
// MATRIX = { {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0}, {0, 0, 1, 0} }
// Output: id = 2
// Explanation: The person with ID 2 does not know anyone but everyone knows him

// Input:
// MATRIX = { {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 1, 0, 0}, {0, 0, 1, 0} }
// Output: No celebrity
// Explanation: There is no celebrity.
// 0010
// 0010
// 0000
// 0010

const findCelebrity1 = (arr, n) => {
  let stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(i);
  }

  while (stack.length > 1) {
    let a = stack.pop();
    let b = stack.pop();
    if (arr[a][b] === 0) {
      stack.push(a);
    } else if (arr[a][b] === 1) {
      stack.push(b);
    }
  }
  let x = stack.pop();
  let bool = false;
  for (let i = 0; i < n; i++) {
    if (i === x) {
      continue;
    } else if (arr[x][i] !== 0 || arr[i][x] !== 1) {
      bool = true;
    }
  }
  if (bool === true) return -1;
  else return x;
};

const findCelebrity = (arr, n) => {
  let stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(i);
  }
  console.log("stack", stack);

  while (stack.length > 1) {
    let a = stack.pop();
    let b = stack.pop();
    if (arr[a][b] === 1) {
      stack.push(b);
    } else if (arr[a][b] === 0) {
      stack.push(a);
    }
  }
  let x = stack.pop();
  console.log(x);
  let bool = false;
  for (let i = 0; i < n; i++) {
    console.log("@@", x, i, arr[x][i]);
    if (i === x) {
      continue;
    } else if (arr[x][i] !== 0 || arr[i][x] !== 1) {
      console.log("@@444", x, i, arr[x][i]);
      bool = true;
    }
  }
  if (bool === true) {
    return -1;
  } else {
    return x;
  }
};

console.log(
  findCelebrity(
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ],
    4
  )
);
