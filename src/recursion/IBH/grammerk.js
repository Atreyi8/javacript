const kthGrammar = (n, k) => {
  console.log(n, k);
  if (n == 1 && k == 1) return 0;

  let mid = Math.pow(2, n - 1) / 2;

  if (k <= mid) {
    return kthGrammar(n - 1, k);
  } else {
    return !kthGrammar(n - 1, k - mid);
  }
};

console.log(kthGrammar(4, 5));

//0  n =1
//01  n=2
//0110   n =3
//01101001  n=4
