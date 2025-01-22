// const max =(a, b) =>{
//           return (a > b) ? a : b;
//     }
const knapsack01TD = (wt, val, n, W) => {
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(W + 1).fill(-1));
  //console.log(dp)
  //let dp = new Array(n+1)
  for (let i = 0; i <= n; i++) {
    // dp[i] = new Array(W+1)
    for (let w = 0; w <= W; w++) {
      // recursive base condition as initilisation
      if (i == 0 || w == 0) {
        dp[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        console.log(
          "here###",
          i,
          w,
          val[i - 1],
          dp[i - 1][w - wt[i - 1]],
          dp[i - 1][w]
        );
        dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
      } else if (wt[i - 1] > w) {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  console.log("&&&", dp, dp[n][W]);
};
knapsack01TD([2, 1, 4, 3, 2], [1, 4, 3, 5, 2], 5, 11);

function max(a, b) {
  return a > b ? a : b;
}

// Returns the maximum value that can
// be put in a knapsack of capacity W
function knapSack(W, wt, val, n) {
  let i, w;
  let K = new Array(n + 1);

  // Build table K[][] in bottom up manner
  for (i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }
  console.log(K);

  return K[n][W];
}

knapSack(11, [2, 1, 4, 3, 2], [1, 4, 3, 5, 2], 5);
