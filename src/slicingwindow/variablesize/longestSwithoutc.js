// Longest Substring With Without Repeating Characters | Variable Size Sliding Window
//I/p - pwwkew
// o/p - wke - 3 kew-÷≥÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷3

const longestSubstringWithoutRepeatingCharacter = (str) => {
  let i = 0,
    j = 0,
    max = 0;
  const mapObj = new Map();

  while (j < str.length) {
    mapObj.set(str[j], mapObj.get(str[j]) + 1 || 1);
    // this condition will never hit ********* map size is 4 but window size is 3 => will never come
    // if(mapObj.size > (j-i+1)){
    //     j++;
    // }
    if (mapObj.size === j - i + 1) {
      max = Math.max(max, j - i + 1);
      j++;
    }
    // pay attention less than ############
    else if (mapObj.size < j - i + 1) {
      while (mapObj.size < j - i + 1) {
        mapObj.set(str[i], mapObj.get(str[i]) - 1);
        if (mapObj.get(str[i]) === 0) {
          mapObj.delete(str[i]);
        }
        i++;
      }
      if (mapObj.size === j - i + 1) {
        max = Math.max(j - i + 1, max);
      }

      j++;
    }
  }

  return max;
};

console.log(longestSubstringWithoutRepeatingCharacter("pwwkexw"));
