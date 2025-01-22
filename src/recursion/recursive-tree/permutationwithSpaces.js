// Permutation with Spaces
//Input:  str[] = "ABC"
//Output: (A_B_C)(A_BC)(AB_C)(ABC) .

let result = [];

const solve = (inp, out) => {
  if (inp.length === 0) {
    result.push(out);
    return;
  }
  let op1 = out + "_" + inp[0];
  let op2 = out + inp[0];

  solve(inp.substring(1), op2);
  solve(inp.substring(1), op1);
};

const permutationwithSpaces = (str) => {
  let out = str[0];
  let inp = str.substring(1);

  solve(inp, out);
};

permutationwithSpaces("ABC");
console.log(result);
