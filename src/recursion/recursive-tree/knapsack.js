// o-1 knapsack

const knapsack = (wt, val, W, n) => {
  console.log(wt, val, W, n);
  if (n === 0 || W === 0) {
    return 0;
  }

  if (wt[n - 1] <= W) {
    return Math.max(
      val[n - 1] + knapsack(wt, val, W - wt[n - 1], n - 1),
      knapsack(wt, val, W, n - 1)
    );
  } else {
    return knapsack(wt, val, W, n - 1);
  }
};

console.log(knapsack([2, 1, 4, 3, 2], [1, 1, 3, 5, 2], 7, 5));

// Item-1  ---- 1 condition (w<=W)  ---- 1 condition (take it)
//         |                        |
//         |                        |
//      2 condition (w>W)not take      2 condition (not take it)

// base condition - shop mai gye , no item toh n=0 , or bag mai hi jagah nhi h W = 0
