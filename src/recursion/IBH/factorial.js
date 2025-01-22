const factorial = (n) => {
  let result = undefined;
  if (n === 1) {
    result = 1;
  } else {
    console.log(result, n);
    result = n * factorial(n - 1);
    console.log("1", result);
  }

  return result;
};

console.log(factorial(6));
