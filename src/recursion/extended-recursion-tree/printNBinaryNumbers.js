//Print N-bit binary numbers having more 1’s than 0’s for any prefix
//Input:
// 2

// 3
// Output:
// 11 10
// 111 110 101 .

const solve = (one, zero, count, output) => {
  if (count === 0) {
    console.log(output);
    return;
  }

  let op1 = output + "1";
  solve(one + 1, zero, count - 1, op1);

  if (zero < one) {
    let op2 = output + "0";
    solve(one, zero + 1, count - 1, op2);
  }
};

const printNBinaryNumbers = (n) => {
  let one = 0;
  let zero = 0;
  let count = n;

  solve(one, zero, count, "");
};
printNBinaryNumbers(5);
