const deleteStructure = (arr, k) => {
  if (k == 1) {
    arr.pop();
    return arr;
  }
  let last = arr[arr.length - 1];
  arr.pop();
  deleteStructure(arr, k - 1);
  arr.push(last);
};

const deleteEle = (arr) => {
  if (arr.length == 0) {
    return;
  }
  let k = Math.trunc(arr.length / 2 + 1);
  console.log(k);
  deleteStructure(arr, k);

  return arr;
};

console.log(deleteEle([5, 4, 5, 8, 9, 2, 1, 6]));
