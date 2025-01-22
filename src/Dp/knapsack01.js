let dp = Array(102)
  .fill()
  .map(() => Array(10002).fill(-1));

//matrix if passed inside func should be of size n+1 , W+1
const knapsacko1 = (wt, val, W, n) => {
  if (n === 0 || W === 0) {
    return 0;
  }
  if (dp[n][W] !== -1) {
    return dp[n][W];
  }

  if (wt[n - 1] <= W) {
    return (dp[n][W] = Math.max(
      val[n - 1] + knapsacko1(wt, val, W - wt[n - 1], n - 1),
      knapsacko1(wt, val, W, n - 1)
    ));
  } else {
    return (dp[n][W] = knapsacko1(wt, val, W, n - 1));
  }
};

console.log(knapsacko1([2, 1, 4, 3, 2], [1, 4, 3, 5, 2], 11, 5));

// console.log(dp)
