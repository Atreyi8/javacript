// ip = a1B2
// out = a1b2 a1B2 A1b2 A1B2

const solve = (inp, out, result) => {
  console.log("^^^", inp, out);
  if (inp.length === 0) {
    result.push(out);
    return;
  }
  let code = inp[0].charCodeAt(0);
  console.log("code", inp[0], code);
  if (code >= 48 && code <= 57) {
    solve(inp.substring(1), out + inp[0], result);
  } else {
    solve(inp.substring(1), out + inp[0].toUpperCase(), result);
    solve(inp.substring(1), out + inp[0].toLowerCase(), result);
  }
};

const letterCasePermutation = (str) => {
  let result = [];
  solve(str, "", result);

  return result;
};

console.log(letterCasePermutation("a1B2c"));
