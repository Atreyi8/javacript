//Find All Anagrams in a String
//Input: s = "cbaebabacd", p = "abc"
//Output: [0,6]
//Given two strings s and p, return an array of all the start indices of p's anagrams in s.
//You may return the answer in any order.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//typically using all the original letters exactly once.

const countAnagrams = (s, p) => {
  const mapObj = new Map();
  for (let ele = 0; ele < p.length; ele++) {
    console.log(p[ele]);
    mapObj.set(p[ele], mapObj.get(p[ele]) + 1 || 1);
  }

  let i = 0;
  let j = 0;
  let ans = [];
  let count = mapObj.size;
  let k = p.length;

  while (j < s.length) {
    console.log("start", mapObj, count, i, j);
    if (mapObj.get(s[j]) !== undefined) {
      mapObj.set(s[j], mapObj.get(s[j]) - 1);
      if (mapObj.get(s[j]) === 0) {
        count = count - 1;
      }
    }
    console.log("mid", mapObj, count, i, j);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (count === 0) {
        ans.push(i);
      }

      if (mapObj.get(s[i]) !== undefined) {
        mapObj.set(s[i], mapObj.get(s[i]) + 1);
        if (mapObj.get(s[i]) === 1) {
          count = count + 1;
        }
      }
      console.log("end", mapObj, count);
      i++;
      j++;
    }

    console.log("--------------------------------");
  }
  console.log(ans);
};

countAnagrams("cbaebabcb", "abc");
