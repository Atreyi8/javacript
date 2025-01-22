// ip = n =3
// op =  '((()))', '(()())', '(())()', '()(())', '()()()'

const solve = (open, close, output, result) => {
  if (open === 0 && close === 0) {
    result.push(output);
    return;
  }
  if (open !== 0) {
    let op1 = output + "(";
    solve(open - 1, close, op1, result);
  }
  if (close > open) {
    let op2 = output + ")";
    solve(open, close - 1, op2, result);
  }
};

const generateBalancedParanthesis = (n) => {
  let open = n;
  let close = n;
  let result = [];

  solve(open, close, "", result);
  console.log(result);
};
generateBalancedParanthesis(3);
