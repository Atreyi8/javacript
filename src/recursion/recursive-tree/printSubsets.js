//Print Subsets | Print PowerSets | Print all Subsequences
let result = [];
const solve = (inp, out) => {
  // ans when inp is empty
  console.log("11", inp, out === "" ? "empty" : out);
  if (inp.length === 0) {
    console.log("out", out);
    result.push(out);
    return;
  }
  // for op1 take first index out of ab ->a , bcd->b
  // for inpt take b for ab b , for abc take bc , bcd->cd
  let op1 = out + inp[0];
  let inp1 = inp.substring(1);
  solve(inp1, op1);
  solve(inp1, out);
};

const printSubset = (str) => {
  solve(str, "");
};

printSubset("abc");
console.log(result);
let d = "d";
console.log("hi", d.substring(1));
