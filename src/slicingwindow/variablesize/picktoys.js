//Pick Toys | An Interesting Sliding Window Problem
// I/P i "abaccab"
//condition - toys have to picked up in a row
// not more than 2 types of toys
// return max number of toys picked
//o/p -acca - 4

const pickToys = (str) => {
  let i = 0,
    j = 0,
    max = 0;
  const mapObj = new Map();
  let k = 2;

  while (j < str.length) {
    mapObj.set(str[j], mapObj.get(str[j]) + 1 || 1);
    if (mapObj.size < k) {
      j++;
    } else if (mapObj.size === k) {
      max = Math.max(max, j - i + 1);
      j++;
    } else if (mapObj.size > k) {
      while (mapObj.size > k) {
        mapObj.set(str[i], mapObj.get(str[i]) - 1);
        if (mapObj.get(str[i]) === 0) {
          mapObj.delete(str[i]);
        }
        i++;
      }
      if (mapObj.size === k) {
        max = Math.max(max, j - i + 1);
      }
      j++;
    }
  }
  return max;
};

console.log(pickToys("abcaab"));
