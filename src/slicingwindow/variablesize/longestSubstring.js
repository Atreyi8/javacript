//Longest Substring With K Unique Characters | Variable Size Sliding Window
// I/p - ("aabacbebebe", 3)
// o/p - cbebebe - 7

const longestSubstringwithKUniqueCharacters = (str, k) => {
  let i = 0,
    j = 0,
    max = 0;
  const mapObj = new Map();

  while (j < str.length) {
    mapObj.set(str[j], mapObj.get(str[j]) + 1 || 1);

    if (mapObj.size < k) {
      j++;
    } else if (mapObj.size === k) {
      max = Math.max(j - i + 1, max);
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
        max = Math.max(j - i + 1, max);
      }
      j++;
    }
  }

  return max;
};

console.log(longestSubstringwithKUniqueCharacters("aabacbebebe", 2));
