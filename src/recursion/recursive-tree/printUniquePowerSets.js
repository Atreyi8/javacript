let result = [];
const mapObj = new Map();

const solve = (inp, out) => {
  if (inp.length === 0) {
    console.log(out);
    result.push(out);
    if (!mapObj.get(out)) {
      mapObj.set(out, 1);
    }
    return;
  }

  solve(inp.substring(1), out + inp[0]);
  solve(inp.substring(1), out);
};

const printUniquePowerSet = (str) => {
  solve(str, "");
};

printUniquePowerSet("aab");
//mapObj has no duplicates
console.log(result, mapObj);
