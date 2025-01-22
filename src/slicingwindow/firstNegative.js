// First Negative Number in every Window of Size K | Sliding Window
//Input = [12,-1,-7,8,-15,30,16,28] , let k = 3
//window  = 12,-1,-7  => -1
//window = -1,-7,8   => -1
// window = -7,8,-15  => -7
//window = 8,-15,30 => -15
// window = -15,30,16 => -15
// window = 30 , 16 ,28 = 0

const firstNegativeInWindow = (arr, k) => {
  let i = 0;
  let j = 0;
  let tempArray = [];
  let anotherArray = [];

  while (j < arr.length) {
    if (arr[j] < 0) {
      tempArray.push(arr[j]);
    }
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      if (tempArray.length === 0) {
        anotherArray.push(0);
      } else {
        anotherArray.push(tempArray[0]);
        console.log(anotherArray);
        if (arr[i] == tempArray[0]) {
          tempArray.shift();
        }
      }
      i++;
      j++;
    }
  }

  return anotherArray;
};
let arr1 = [12, -1, -7, 8, -15, 30, 16, 28];
console.log(firstNegativeInWindow(arr1, 3));
