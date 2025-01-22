// I/P = "ab"
// O?P = "ab" , "aB" , "Ab" , "AB"
let result = [];

const solve = (inp, out) => {
  console.log(out, inp);
  if (inp.length === 0) {
    result.push(out);
    return;
  }
  solve(inp.substring(1), out + inp[0].toUpperCase());
  solve(inp.substring(1), out + inp[0]);
};

const permutationwithCaseChange = (str) => {
  solve(str, "");
};

permutationwithCaseChange("abc");
console.log(result);
