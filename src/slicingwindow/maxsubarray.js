//Find max of all subarray of size k
// [1,3,-1,-5,-1,2,3,-4,5]
// 1,3,-1 = 3
//3,-1,-5 = 3
//output -> [3,3,-1,2,3,3,5]

const fma = (arr, k) => {
  let i = 0,
    j = 0,
    l = [],
    res = [];

  while (j < arr.length) {
    //remove all the elements which are less the elm at j
    while (l.length > 0 && l[l.length - 1] < arr[j]) {
      l.pop();
    }
    //push the curr max and elems after it...i.e. potential max elems
    l.push(arr[j]);
    console.log(l);
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      //push the max to res array (which is stored in front of list)
      res.push(l[0]);
      //check if max elm is getting lost when moving the window
      if (l[0] === arr[i]) {
        l.shift();
      }
      i++;
      j++;
    }
  }
  return res;
};

console.log(fma([1, -1, 1, 3, -5, -1, 2, 3, -4, 5], 3));
